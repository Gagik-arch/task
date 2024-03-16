import React, { ReactElement, useEffect, useState } from 'react';
import { Product, ProductStore } from '@types';
import { useNavigation, useRoute } from '@react-navigation/native';
import productApi from '@api/product.ts';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Text from '@core/Text';
import styles from './styles.ts';
import ProductCard from '@components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addWishList } from '../../store/asyncThunks/products.ts';
import Routes from '@resources/routes.ts';

const CategoryContainer = (): ReactElement => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const route = useRoute();
    const product = useSelector((state: { product: ProductStore }) => state.product);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        setIsLoading(true);
        const categoryName:string = (route.params?.category) as string;

        productApi.getProductsByCategory(categoryName)
          .then((res) => {
              setProducts(res.products);
          })
          .catch(() => {

          }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (products.length) {
        return (
          <View style={styles.cards}>
              <FlatList
                data={products}
                numColumns={2}
                nestedScrollEnabled={true}
                contentContainerStyle={{ columnGap: 20 }}
                scrollEnabled={false}
                renderItem={({ item }: { item: Product }) => {
                    return (
                      <ProductCard
                        product={item}
                        onPress={() => {
                            navigation.navigate(Routes.Product, item);
                        }}
                        isInWishList={product.wishList.findIndex((element: string) => element === `${item.category}/${item.id}`) > -1}
                        onPressHeart={() => {
                            dispatch(addWishList(`${item.category}/${item.id}`));
                        }}
                      />
                    );
                }}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                keyExtractor={(item: Product) => `${item.category}/${item.id}`}
              />
          </View>
        );
    }
    return (
      <Text>
          Product not available
      </Text>
    );
};

export default CategoryContainer;
