import React, { ReactElement, useLayoutEffect, useState } from 'react';
import Text from '@core/Text';
import {  CategoryDataType } from '@containers/CategoriesContainer/types.ts';
import { TouchableOpacity, View } from 'react-native';
import { imagesData } from './staticData';
import { HomeProducts, ProductStore } from '@types';
import Image from '../../core/Image';
import { useNavigation } from '@react-navigation/native';
import Routes from '@resources/routes.ts';
import { useSelector } from 'react-redux';

const CategoriesContainer = (): ReactElement => {
    const navigation = useNavigation();
    const productStore:ProductStore = useSelector((state:{
        product:ProductStore
    }) => state.product);

    const [categoryData, setCategoryData] =
      useState<CategoryDataType[]>([]);

    useLayoutEffect(() => {
        setCategoryData(productStore.homeProducts.map((product: HomeProducts) => {

            return ({
                name: product.name,
                img: imagesData.hasOwnProperty(product.name) ? imagesData[product.name] : '',
            });
        }));
    }, [productStore]);

    return (
      <View >
          {
              categoryData.map((category: CategoryDataType) => {

                  return (
                    <TouchableOpacity style={{ flexDirection: 'column' }}
                                      onPress={() => {
                                          navigation.navigate(Routes.Category, { category: category.name });
                                      }} key={category.name}>
                        <Text size={'18_600'}>{category.name}</Text>
                        <Image uri={category.img} />
                    </TouchableOpacity>
                  );
              })
          }
      </View>
    );
};

export default CategoriesContainer;
