import {configureStore} from '@reduxjs/toolkit';
import {userReducer,productReducer} from './reducers';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch; // Exp
export default store;
