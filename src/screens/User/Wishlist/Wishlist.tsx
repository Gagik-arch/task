import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Text from '@core/Text';
import NavigationHeader from '@core/NavigationHeader';
import Screen from '@core/Screen';

const Wishlist = (): ReactElement => {
  return (
    <Screen header={<NavigationHeader/>}>
      <Text>Wishlist</Text>
    </Screen>
  );
};

export default Wishlist;
