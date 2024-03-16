import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import Image from '@core/Image';
import Row from './Row.tsx';
import Button from '@core/Button';
import Routes from '@resources/routes.ts';
import { useDispatch, useSelector } from 'react-redux';
import { UserStore } from '@types';
import { logout } from '../../store/asyncThunks/user.ts';
import Input from '@core/Input';

const MyProfileContainer = (): ReactElement => {
    const navigation = useNavigation();
    const userStore = useSelector((state: { user: UserStore }) => state.user);
    const dispatch = useDispatch();

    if (userStore.isLoading) {
        return <ActivityIndicator />;
    }

    return (
      <View style={{ flex: 1 }}>
          {
            userStore.data && <>
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
            </>
          }

          <View style={{ flex: 1 }} />
          <Button variant={userStore.data ? 'secondary' : 'primary'}
                  isLoading={userStore.isLoading}
                  disabled={userStore.isLoading}
                  onPress={() => {
                      if (userStore.data) {
                          dispatch(logout(() => {
                              navigation.reset({ index: 0, routes: [{ name: Routes.Login }] });
                          }));
                      } else {
                          navigation.navigate(Routes.Login);
                      }
                  }}
                  label={userStore.data ? 'Log out' : 'Login'}
          />
      </View>
    );
};


export default MyProfileContainer;
