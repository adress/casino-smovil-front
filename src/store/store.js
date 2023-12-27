import { configureStore } from '@reduxjs/toolkit';
import { authSlice, rouletteSlice, userSlice } from './';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        roulette: rouletteSlice.reducer,
        user: userSlice.reducer
    },
})
