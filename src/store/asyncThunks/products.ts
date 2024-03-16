import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { productActions } from '../reducers';
import Toast from 'react-native-toast-message';
import productApi from '@api/product';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllProjects: AsyncThunk<void, void, any> = createAsyncThunk(
  'products',
  async (_, { dispatch }) => {
      dispatch(productActions.setLoading(true));

      productApi.getCategories()
        .then((res => {
            Promise.all(
              res.map((c) => productApi.getProductsByCategory(c, '?limit=4'))
            )
              .then(products => {
                  res.map((category, index) =>
                    ({ [category]: products[index].products })
                  );
                  dispatch(productActions.setHomeProduct(res.map((category: string, index: number) => ({
                        name: category,
                        products: products[index].products,
                    }))
                  ));
              }).catch(() => {
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
            dispatch(productActions.setLoading(false));
        });
  }
);

export const addWishList: AsyncThunk<void, string, void> = createAsyncThunk(
  'wishlist',
  async (ID: string, { dispatch }) => {
      AsyncStorage.getItem('wishlist')
        .then((res: string | null): void => {
            let wishlistClone: string[] = [];
            if (res) {
                wishlistClone = [...JSON.parse(res)];

                if (wishlistClone.includes(ID)) {
                    wishlistClone = wishlistClone.filter((wishlistId: string) => wishlistId !== ID);
                } else {
                    wishlistClone.push(ID);
                }

            }
            AsyncStorage.setItem('wishlist', JSON.stringify(wishlistClone))
              .then(() => {
                  dispatch(productActions.setWishList(wishlistClone));
              })
              .catch(() => {

              });
        })
        .catch(() => {
            // console.log(e);
        })
        .finally(() => {

        });
  }
);

export const updateWishList: AsyncThunk<void, void, any> = createAsyncThunk(
  'wishlist',
  async (_, { dispatch }) => {
      AsyncStorage.getItem('wishlist').then((res: string | null): void => {
          if (res) {
              AsyncStorage.setItem('wishlist', res)
                .then(() => {
                    dispatch(productActions.setWishList(JSON.parse(res)));
                })
                .catch(() => {

                });
          }

      })
        .catch(() => {
            // console.log(e);
        })
        .finally(() => {

        });
  }
);


export const getProductList: AsyncThunk<void, number, any> = createAsyncThunk(
  'wishlist',
  async (offset: number, { dispatch }) => {
      dispatch(productActions.setLoading(true));
      productApi.getALLProducts(offset)
        .then((res) => {
            dispatch(productActions.setAllProductsProducts(res.products));
            dispatch(productActions.setCountInDB(res.total));
        })
        .catch((e) => {
            Toast.show({
                type: 'error',
                text1: 'Something went wrong <Login> ' + e,
            });
        })
        .finally(() => {
            dispatch(productActions.setLoading(false));
        });
  }
);

