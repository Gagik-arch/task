import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Product, ProductStore } from '@types';
import ProductCard from '@components/ProductCard';
import { addWishList, getProductList } from '../../store/asyncThunks/products.ts';
import Routes from '@resources/routes.ts';
import { ProductListContainerProps } from './types.ts';

const ProductListContainer = ({ searchValue }: ProductListContainerProps): ReactElement => {
    const navigation = useNavigation();
    const productStore = useSelector((state: { product: ProductStore }) => state.product);
    const dispatch = useDispatch();
    const [offset, setOffSet] = useState<number>(0);

    const filteredProducts: Product[] = useMemo(() => {
        return productStore.allProducts.filter((product: Product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    }, [productStore.allProducts, searchValue]);

    useEffect(() => {
        dispatch(getProductList(offset));
    }, [offset, dispatch]);

    return (
      <View style={{ flex: 1 }}>
          <FlatList
            data={filteredProducts}
            numColumns={2}
            contentContainerStyle={{ columnGap: 20 }}
            scrollEnabled={false}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                setOffSet(offset + 30);
            }}
            renderItem={({ item }: { item: Product }) => {
                return (
                  <ProductCard
                    product={item}
                    isInWishList={productStore.wishList.includes(`${item.category}/${item.id}`)}
                    onPress={() => {
                        navigation.navigate(Routes.Product, item);
                    }}
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
};

export default ProductListContainer;
