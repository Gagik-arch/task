import React, { ReactElement } from 'react';
import NavigationHeader from '@core/NavigationHeader';
import Screen from '@core/Screen';
import WishlistContainer from '@containers/WishlistContaner';
import Edges from '@resources/edges';

const Wishlist = (): ReactElement => {
    return (
      <Screen
        header={<NavigationHeader />}
        scrollDisable={true}
        style={{ flex: 1, ...Edges.padding(12) }}
      >
          <WishlistContainer />
      </Screen>
    );
};

export default Wishlist;
