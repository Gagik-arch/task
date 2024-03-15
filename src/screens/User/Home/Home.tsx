import { ReactElement } from 'react';
import Banner from '@components/Banner';
import productStore from '@store/product';
import HomeContainer from '@containers/HomeContainer';
import Screen from '@core/Screen';

const Home = (): ReactElement => {

    return (
      <Screen>
          <Banner />
          <HomeContainer productStore={productStore} />
      </Screen>
    );
};


export default Home;
