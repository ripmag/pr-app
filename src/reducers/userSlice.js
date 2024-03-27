import { createSlice } from "@reduxjs/toolkit";

const initialState = 
{
    isAuthProcessing: false,
    isLogged: false,
};

export const userSlice = createSlice ({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginRequest: (state, action) => {
            state.isAuthProcessing = true;
        },
        loginSuccess: (state, action) => {
            state.isLogged = true;
        },
        logOut: (state, action) => {
            state.isLogged = false;
        },
    },
})

export const {
    loginRequest,
    loginSuccess,
    logOut,
} = userSlice.actions;

export default userSlice.reducer;