import { ReactElement } from 'react';
import Banner from '@components/Banner';
import HomeContainer from '@containers/HomeContainer';
import Screen from '@core/Screen';

const Home = (): ReactElement => {

    return (
      <Screen scrollDisable={true}>
          <Banner />
          <HomeContainer />
      </Screen>
    );
};


export default Home;
