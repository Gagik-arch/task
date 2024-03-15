import { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ProductStore } from '@store/product';
import { ActivityIndicator, FlatList,  View } from 'react-native';
import Text from '@core/Text';
import styles from './styles';
import { Product } from '@types';
import Edges from '@resources/edges';
import Image from '@core/Image';
import Button from '../../core/Button';
import Colors from '@resources/colors.ts';
import { useNavigation, useRoute } from '@react-navigation/native';
import Routes from '@resources/routes.ts';

const HomeContaner = observer(({ productStore }: { productStore: ProductStore }): ReactElement => {
const navigation = useNavigation();
const route = useRoute();

    useEffect(() => {
        productStore.getCategories();
    }, []);

    if (productStore.isLoading){
        return (
          <ActivityIndicator color={Colors.purple}/>
        );
    }
    return (
      <View style={styles.root}>
          {
              productStore.homeProducts.map(product => {
                  const cartegoryHeader: string = (product.category[0].toUpperCase() + product.category.slice(1)).replaceAll('-', ' ');
                  return (
                    <View key={product.category}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text size={'18_600'}>{cartegoryHeader}</Text>
                            <Button textStyle={{ color: 'blue' }}
                                    label={'See all'}
                                    onPress={() => {
                                        navigation.navigate(Routes.Category,{category:product.category});
                                    }} />
                        </View>
                        <View style={styles.cards}>
                            <FlatList
                              data={product.products}
                              numColumns={2}
                              nestedScrollEnabled={true}
                              contentContainerStyle={{ columnGap: 20 }}
                              scrollEnabled={false}
                              renderItem={({ item }: { item: Product }) => {
                                  return (
                                    <View style={styles.card}>
                                        <Image uri={item.thumbnail}
                                               style={{
                                                   width: '100%',
                                                   height: 100,
                                               }} />
                                        <Text size={'16_600'} style={{ ...Edges.padding(8) }}>{item.brand}</Text>
                                    </View>
                                  );
                              }}
                              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                              columnWrapperStyle={{
                                  justifyContent: 'space-between',
                              }}
                              keyExtractor={(item:Product) => item.id}
                            />
                        </View>
                    </View>
                  );
              })
          }
      </View>
    );
});

export default HomeContaner;
