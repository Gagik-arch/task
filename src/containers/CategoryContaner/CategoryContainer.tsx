import React, { ReactElement, useEffect, useState } from 'react';
import { Product } from '@types';
import { useRoute } from '@react-navigation/native';
import productApi from '@api/product.ts';
import { ActivityIndicator, View } from 'react-native';
import Text from '@core/Text';
import Image from '@core/Image';

const CategoryContainer = (): ReactElement => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const route = useRoute();

    useEffect(() => {
        setIsLoading(true);
        const categoryName = route.params.category;

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
        <>
            {products.map((product: Product) => {
                return (
                  <View key={product.id}>
                      <Image uri={product.thumbnail} style={{height:100}}/>
                      <Text size={'16_600'}>{product.title}</Text>
                  </View>
                );
            })}
        </>
      );
    }
    return (
      <Text>
          Product not available
      </Text>
    );
};

export default CategoryContainer;
