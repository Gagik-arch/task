import React, { ReactElement, useMemo } from 'react';
import Screen from '@core/Screen';
import NavigationHeader from '@core/NavigationHeader';
import Text from '@core/Text';
import Edges from '@resources/edges';
import { useRoute } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import styles from './styles.ts';
import Image from '@core/Image';
import { Product, ProductStore } from '@types';
import { View } from 'react-native';
import Icon from '@core/Icon';
import Button from '@core/Button';
import Colors from '@resources/colors.ts';
import { useDispatch, useSelector } from 'react-redux';
import { addWishList } from '../../../store/asyncThunks/products.ts';

const ProductScreen = (): ReactElement => {
    const route = useRoute();
    const dispatch = useDispatch();
    const product: Product | null = useMemo(() => route.params as Product, [route.params]);
    const productStore = useSelector((state: { product: ProductStore }) => state.product);

    const isFavorite: boolean = useMemo(() => {
        return productStore.wishList.includes(`${product.category}/${product.id}`);
    }, [product, productStore.wishList]);

    return (
      <Screen header={<NavigationHeader backHandler={true}
                                        title={<Text numberOfLines={1}
                                                     size={'20_600'}>
                                            {(product?.title)[0].toUpperCase() + product?.title.slice(1)}
                                        </Text>}
      />}
              contentContainerStyle={{ ...Edges.padding(12) }}
      >
          <View style={styles.root}>
              <PagerView style={styles.pagerView}
                         initialPage={0}
                         overScrollMode={'always'}
              >
                  {
                      product?.images.map((img: string) => {
                          return <Image key={img} uri={img} />;
                      })
                  }
              </PagerView>
              <Button
                style={styles.wash_list_btn}
                onPress={() => {
                    dispatch(addWishList(`${product.category}/${product.id}`));
                }}
              >
                  <Icon
                    fillColor={isFavorite ? Colors.purple : undefined}
                    strokeColor={Colors.purple} name={'Heart'}
                  />
              </Button>
          </View>
          <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text size={'24_600'}>{product?.brand}</Text>
                  <Text size={'16_400'}>{product?.title}</Text>
              </View>
              <Text>{product?.description}</Text>
              <View style={{ flexDirection: 'row', columnGap: 40, alignItems: 'center' }}>
                  <Text size={'18_600'}>Price</Text>
                  {product?.price && <Text size={'16_400'}>${product.price.toString()}</Text>}
              </View>
          </View>
      </Screen>
    );
};

export default ProductScreen;
