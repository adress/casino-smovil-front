import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        onListUsers: (state, { payload }) => {
            state.users = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onListUsers } = userSlice.actions;