import { ReactElement, useEffect } from 'react';
import { FlatList, View, ActivityIndicator, Dimensions } from 'react-native';
import Text from '@core/Text';
import styles from './styles';
import { HomeProducts, Product, ProductStore } from '@types';
import Button from '../../core/Button';
import Colors from '@resources/colors.ts';
import { useNavigation } from '@react-navigation/native';
import Routes from '@resources/routes.ts';
import ProductCard from '@components/ProductCard';
import Edges from '@resources/edges.ts';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/';
import { addWishList, getAllProjects } from '../../store/asyncThunks/products.ts';
import Banner from '@components/Banner';

const { height } = Dimensions.get('screen');
const HomeContaner = (): ReactElement => {
    const navigation = useNavigation();
    const productStore = useSelector((state: { product: ProductStore }) => state.product);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);
    if (productStore.isLoading) {
        return (
          <ActivityIndicator color={Colors.purple} style={{marginTop:20}} />
        );
    }
    return (
      <View style={styles.root}>
          <FlatList
            data={productStore.homeProducts}
            nestedScrollEnabled={true}
            renderItem={({ item: category }: { item: HomeProducts }) => {
                const cartegoryHeader: string = (category.name[0].toUpperCase() + category.name.slice(1)).replaceAll('-', ' ');

                return (
                  <View key={category.name}>
                      <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center', ...Edges.margin(10, 0),
                      }}>
                          <Text size={'24_600'}>{cartegoryHeader}</Text>
                          <Button textStyle={{ color: Colors.lightGray }}
                                  label={'See all'}
                                  onPress={() => {
                                      navigation.navigate(Routes.Category, { category: category.name });
                                  }} />
                      </View>
                      <View style={styles.cards}>
                          <FlatList
                            data={category.products}
                            numColumns={2}
                            contentContainerStyle={{ columnGap: 20 }}
                            scrollEnabled={false}
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
                                    }} />
                                );
                            }}
                            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                            }}
                            keyExtractor={(item: Product) => `${item.category}/${item.id}`}
                          />
                      </View>
                  </View>
                );
            }}
            keyExtractor={(item: HomeProducts) => item.name}
          />
      </View>
    );
};

export default HomeContaner;
