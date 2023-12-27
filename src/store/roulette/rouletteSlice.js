import { createSlice } from '@reduxjs/toolkit';

export const rouletteSlice = createSlice({
    name: 'roulette',
    initialState: {
        spinning: false,
        roulette: {},
        history: [], //gameTime, betValue, amount
        balance: 0,
        errorMessage: undefined,
    },
    reducers: {
        onSpinning: (state, /* action */) => {
            state.spinning = true;
        },
        onSpinned: (state, { payload }) => {
            state.spinning = false;
            state.roulette = payload;
            state.balance = payload.balance;
            const { gameTime, betValue, amount } = payload;
            state.history = [...state.history, { gameTime, betValue, amount }];
        },
        onLoadHistory: (state, { payload }) => {
            state.history = payload.items;
            state.balance = payload.balance;
        },
        onClearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }

    }
});


// Action creators are generated for each case reducer function
export const { onSpinning, onSpinned, onLoadHistory, onClearErrorMessage } = rouletteSlice.actions;