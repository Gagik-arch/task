import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeProducts, ProductStore } from '@types';

const initialState: ProductStore = {
    isLoading: false,
    wishList: [],
    homeProducts: [],
    allProducts:[],
    countInDB:0,
};

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setWishList(state, action: PayloadAction<string[]>) {
            state.wishList = action.payload;
        },
        setHomeProduct(state, action: PayloadAction<HomeProducts[]>) {
            state.homeProducts = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setAllProductsProducts(state, action) {
            state.allProducts = [...state.allProducts,...action.payload];
        },
        setCountInDB(state, action) {
            state.countInDB = action.payload;
        },
    },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;

