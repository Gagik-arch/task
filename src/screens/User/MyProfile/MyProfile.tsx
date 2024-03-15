import { ReactElement } from 'react';
import NavigationHeader from '@core/NavigationHeader';
import Screen from '@core/Screen';
import Edges from '@resources/edges';
import MyProfileContainer from '@containers/MyProfileContaner';
import userStore from '@store/user';

const MyProfile = (): ReactElement => {
    return (
      <Screen header={<NavigationHeader />}
              contentContainerStyle={{ ...Edges.padding(12) }}
      >
          <MyProfileContainer userStore={userStore} />
                </Screen>
    );
};

export default MyProfile;
