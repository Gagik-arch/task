import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '../reducers';
import Toast from 'react-native-toast-message';
import userApi from '@api/user.ts';
import type { BodyType, User } from '@types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login: AsyncThunk<void, { body: BodyType; navigate: () => void }, any> = createAsyncThunk(
  'user/login',
  async ({ body, navigate }: { body: BodyType, navigate: () => void }, { dispatch }) => {
      dispatch(userActions.setLoading(true));

      userApi.auth(body)
        .then((res: User) => {
            if (res.token) {
                AsyncStorage.setItem('token', res?.token)
                  .then(() => {
                      dispatch(userActions.setData(res));
                      navigate();
                  }).catch(() => {
                });
            }
        })
        .catch((e: string) => {
            Toast.show({
                type: 'error',
                text1: 'Something went wrong <Login> ' + e,
            });
        })
        .finally(() => {
            dispatch(userActions.setLoading(false));
        });
  }
);


export const logout: AsyncThunk<void, {  navigate: () => void }, any> = createAsyncThunk(
  'user/logout',
  async (  navigate: () => void , { dispatch }) => {
      dispatch(userActions.setLoading(true));

      AsyncStorage.clear()
        .then(() => {
            dispatch(userActions.clear());
            navigate();
        })
        .catch((e: string) => {
            console.log(e);
            Toast.show({
                type: 'error',
                text1: 'Something went wrong <Logout> ' + e,
            });
        })
        .finally(() => {
            dispatch(userActions.setLoading(false));
        });
  }
);

