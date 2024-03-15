import React, { ReactElement, useLayoutEffect, useState } from 'react';
import styles from './style';
import Text from '@core/Text';
import { observer } from 'mobx-react-lite';
import { CategoryContainerProps, CategoryDataType } from '@containers/CategoriesContainer/types.ts';
import { TouchableOpacity, View } from 'react-native';
import { imagesData } from './staticData';
import { HomeProducts } from '@types';
import Image from '../../core/Image';
import { useNavigation } from '@react-navigation/native';
import Routes from '@resources/routes.ts';

const CategoriesContainer = observer(({ productStore }: CategoryContainerProps): ReactElement => {
    const navigation = useNavigation();

    const [categoryData, setCategoryData] =
      useState<CategoryDataType[]>([]);

    useLayoutEffect(() => {
        setCategoryData(productStore.homeProducts.map((product: HomeProducts) => {

            return ({
                name: product.category,
                img: imagesData.hasOwnProperty(product.category) ? imagesData[product.category] : '',
            });
        }));
    }, [productStore.homeProducts]);

    return (
      <View>
          {
              categoryData.map((category: CategoryDataType) => {

                  return (
                    <TouchableOpacity style={{ flexDirection: 'column' }}
                                      onPress={() => {
                                          navigation.navigate(Routes.Category,{category:category.name});
                                      }} key={category.name}>
                        <Text size={'18_600'}>{category.name}</Text>
                        <Image uri={category.img} />
                    </TouchableOpacity>
                  );
              })
          }
      </View>

    );
});

export default CategoriesContainer;
