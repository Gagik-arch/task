import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeProducts, Product, ProductStore } from '@types';
import ProductCard from '@components/ProductCard';
import Text from '@core/Text';
import { addWishList } from '../../store/asyncThunks/products.ts';
import Routes from '@resources/routes.ts';
import Colors from '@resources/colors.ts';

const WishlistContainer = (): ReactElement => {
    const navigation = useNavigation();
    const productStore = useSelector((state: { product: ProductStore }) => state.product);
    const dispatch = useDispatch();

    return (
      <>
          <FlatList
            data={productStore.wishList}
            numColumns={2}
            contentContainerStyle={{ columnGap: 20 }}
            ListEmptyComponent={
                productStore.isLoadingWishlist ?
                  <ActivityIndicator animating={true} color={Colors.purple} /> :
                  <Text>Your wishlist is empty.</Text>
            }
            renderItem={({ item }: { item: string }) => {
                const [category, ID] = item.split('/');

                const categories: HomeProducts | undefined = productStore.homeProducts.find((c: HomeProducts) => c.name === category);
                const prod: Product | undefined = categories?.products.find((elem: Product) => elem.id.toString() === ID);

                if (prod) {
                    return (
                      <ProductCard
                        onPress={() => {
                            navigation.navigate(Routes.Product, prod);
                        }}
                        product={prod}
                        isInWishList={productStore.wishList.includes(`${prod.category}/${prod.id}`)}
                        onPressHeart={() => {
                            dispatch(addWishList(`${prod.category}/${prod.id}`));
                        }} />
                    );
                }
                return null;
            }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            columnWrapperStyle={{
                justifyContent: 'space-between',
            }}
            keyExtractor={(item: string) => item}
          />
      </>
    );
};


export default WishlistContainer;
