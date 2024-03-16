import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeProducts, Product, ProductStore } from '@types';
import ProductCard from '@components/ProductCard';
import Text from '@core/Text';
import { addWishList } from '../../store/asyncThunks/products.ts';

const WishlistContainer = (): ReactElement => {
    const navigation = useNavigation();
    const productStore = useSelector((state: { product: ProductStore }) => state.product);
    const dispatch = useDispatch();
    if (productStore.isLoadingWishlist) {
        return <ActivityIndicator />;
    }

    if (!productStore.wishList.length) {
        return <Text>Your wishlist is empty.</Text>;
    }
    return (
      <>
          <FlatList
            data={productStore.wishList}
            numColumns={2}
            contentContainerStyle={{ columnGap: 20 }}
            renderItem={({ item }: { item: string }) => {
                const [category, ID] = item.split('/');

                const categories: HomeProducts | undefined = productStore.homeProducts.find((c: HomeProducts) => c.name === category);
                const prod: Product | undefined = categories?.products.find((elem: Product) => elem.id.toString() === ID);

                if (prod) {
                    return (
                      <ProductCard
                             onPress={()=>{
                        navigation.navigate(Routes.Product,prod);
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
          {/*{productStore.homeProducts.map((category: HomeProducts) => {*/}
          {/*    return (*/}
          {/*      <FlatList*/}
          {/*        data={category.products}*/}
          {/*        numColumns={2}*/}
          {/*        contentContainerStyle={{ columnGap: 20 }}*/}
          {/*        scrollEnabled={false}*/}
          {/*        renderItem={({ item }: { item: ProductScreen }) => {*/}
          {/*            if (!productStore.wishList.includes(`${item.category}/${item.id}`)) {*/}
          {/*                return null;*/}
          {/*            }*/}
          {/*            return (*/}
          {/*              <ProductCard*/}
          {/*                product={item}*/}
          {/*                isInWishList={productStore.wishList.includes(`${item.category}/${item.id}`)}*/}
          {/*                onPressHeart={() => {*/}
          {/*                    dispatch(addWishList(`${item.category}/${item.id}`));*/}
          {/*                }} />*/}
          {/*            );*/}
          {/*        }}*/}
          {/*        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}*/}
          {/*        columnWrapperStyle={{*/}
          {/*            justifyContent: 'space-between'*/}
          {/*        }}*/}
          {/*        keyExtractor={(item: ProductScreen) => `${item.category}/${item.id}`}*/}
          {/*      />*/}
          {/*    );*/}
          {/*}*/}
      </>
    );
};


export default WishlistContainer;
