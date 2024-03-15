import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import Image from '@core/Image';
import { observer } from 'mobx-react-lite';
import { MyProfileProps } from '@screens/User/MyProfile/types.ts';
import Row from './Row.tsx';
import Button from '@core/Button';
import Routes from '@resources/routes.ts';

const MyProfileContainer = observer(({ userStore }: MyProfileProps): ReactElement => {
    const navigation = useNavigation();

    if (userStore.isLoading) {
        return <ActivityIndicator />;
    }

    return (
      <View style={{ flex: 1 }}>
          {userStore.data?.image &&
            <Image uri={userStore.data?.image} style={{
                width: 180,
                height: 180,
                borderRadius: 90,
                overflow: 'hidden',
                borderColor: 'rgba(160,160,160,1)',
                borderWidth: 5,
            }} />
          }
          <Row title={'Username'} label={userStore.data?.username} />
          <Row title={'Lastname'} label={userStore.data?.lastName} />
          <Row title={'Email'} label={userStore.data?.email} />
          <Row title={'Gender'} label={userStore.data?.gender} />
          <Row title={'Username'} label={userStore.data?.username} />
          <View style={{ flex: 1 }} />
          <Button variant={'secondary'}
                  isLoading={userStore.isLoading}
                  disabled={userStore.isLoading}
                  onPress={() => {
                      userStore.logOut(() => {
                          navigation.reset({ index: 0, routes: [{ name: Routes.Login }] });
                      });
                  }} label={'Log out'} />
      </View>
    );
});


export default MyProfileContainer;
