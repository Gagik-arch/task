import { runInAction, makeAutoObservable } from 'mobx';
import { type  HomeProducts, Product, type User } from '@types';
import Toast from 'react-native-toast-message';
import productApi from '@api/product.ts';

export class ProductStore {
    timer: number = 0;
    isLoading: boolean = false;
    // data: { [key: string]: Category[] } = [];
    homeProducts: HomeProducts[]  = [];

    constructor() {
        makeAutoObservable(this);
    }

    public getCategories(): void {
        runInAction(() => {
            this.isLoading = true;
        });
        productApi.getCategories()
          .then((res => {
              Promise.all(
                res.map((c) => productApi.getProductsByCategory(c, '?limit=4'))
              )
                .then(products => {
                    res.map((category, index: number) =>
                      ({ [category]: products[index].products })
                    );

                    runInAction(() => {
                        this.homeProducts = res.map((category:string, index: number) =>
                          ({
                              category,
                              products:products[index].products,
                          }));
                    });
                }).catch((e) => {
                  console.log(e);
              });
          }))
          .catch(e => {
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
}

const productStore: ProductStore = new ProductStore();

export default productStore;
