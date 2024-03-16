import React, { ReactElement, useState } from 'react';
import Screen from '@core/Screen';
import NavigationHeader from '@core/NavigationHeader';
import Edges from '@resources/edges';
import ProductListContainer from '@containers/ProductListContainer';
import Input from '@core/Input';
import { View } from 'react-native';
import Icon from '@core/Icon';

const ProductList = (): ReactElement => {
    const [searchValue, setSearchedValue] = useState<string>('');

    return (
      <Screen
        header={<NavigationHeader
          title={
              <View style={{ width: '100%' }}>
                  <Input
                    placeholder={'Search'}
                    value={searchValue}
                    onFinish={(e) => setSearchedValue(e.text.length > 2 ? e.text : '')}
                    buttons={<Icon name={'Search'} />}
                  />
              </View>
          }
        />}
        contentContainerStyle={{ ...Edges.padding(12) }}
      >
          <ProductListContainer searchValue={searchValue} />
      </Screen>
    );
};

export default ProductList;
