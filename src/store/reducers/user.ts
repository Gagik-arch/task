import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserStore } from '@types';

const initialState: UserStore = {
    isLoading: false,
    data: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setData(state, action: PayloadAction<User>) {
            state.data = action.payload;
        },
        clear(state) {
            state.data = null;
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;

