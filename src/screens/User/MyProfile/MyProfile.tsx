import { ReactElement } from 'react';
import NavigationHeader from '@core/NavigationHeader';
import Screen from '@core/Screen';
import Edges from '@resources/edges';
import MyProfileContainer from '@containers/MyProfileContaner';
import Input from '@core/Input';

const MyProfile = (): ReactElement => {
    return (
      <Screen header={<NavigationHeader />}
              contentContainerStyle={{ ...Edges.padding(12) }}
      >
          <MyProfileContainer  />
      </Screen>
    );
};

export default MyProfile;
