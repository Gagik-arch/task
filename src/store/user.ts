import { runInAction, makeAutoObservable } from 'mobx';
import userApi from '@api/user';
import { type BodyType, type User } from '@types';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class UserStore {
    timer: number = 0;
    isLoading: boolean = false;
    data: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    public authUser(body: BodyType, navigate?: () => void): void {
        this.isLoading = true;
        userApi.auth(body)
          .then((res: User) => {
              if (res.token) {
                  AsyncStorage.setItem('token', res?.token)
                    .then(() => {
                        runInAction(() => {
                            this.data = res;
                            navigate?.();
                        });
                    }).catch(() => {
                  });
              }
          })
          .catch((e: string) => {
              Toast.show({
                  type: 'error',
                  text1: 'Something went wrong <Login> ' + e,
                  // text2: e,
              });
          })
          .finally(() => {
              runInAction(() => {
                  this.isLoading = false;
              });
          });
    }

    public updateUser(navigate?: () => void): void {
        this.isLoading = true;
        userApi.me()
          .then((res: User) => {
              runInAction(() => {
                  this.data = res;
                  navigate?.();
              });
          })
          .catch((e: string) => {
              Toast.show({
                  type: 'error',
                  text1: 'Something went wrong <User Update> ' + e,
                  // text2: e,
              });
          })
          .finally(() => {
              runInAction(() => {
                  this.isLoading = false;
              });
          });
    }
    public logOut(navigate?:()=>void):void{
        runInAction(() => {
            this.isLoading = true;
        });
        AsyncStorage.clear()
          .then(() => {
              runInAction(() => {
                  this.data = null;
                  navigate?.();
              });
          }).catch(() => {
        })
          .finally(()=>{
              runInAction(() => {
                  this.isLoading = false;
              });
          });
    }
}

const userStore: UserStore = new UserStore();

export default userStore;
