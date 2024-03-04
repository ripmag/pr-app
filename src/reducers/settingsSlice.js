import { createSlice } from "@reduxjs/toolkit";
// import { SettingsModel } from "../models/settings";
import Types from "../classes/types";
import Register from "../classes/register";

const localState = Register.has(Types.REGISTER_SETTINGS) && Register.get(Types.REGISTER_SETTINGS);
const initialState = localState ||
{
    language: Types.LANGUAGE_EN,
    theme: Types.LIGHT,
};

export const settingsSlice = createSlice ({
    name: 'settings',
    initialState: initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            Register.set(Types.REGISTER_SETTINGS, state);
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
            Register.set(Types.REGISTER_SETTINGS, state);
        },
    },
})

export const {
    setLanguage,
    setTheme,
} = settingsSlice.actions;

export default settingsSlice.reducer;