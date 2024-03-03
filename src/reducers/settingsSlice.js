import { createSlice } from "@reduxjs/toolkit";
// import { SettingsModel } from "../models/settings";
// import Types from "../classes/types";


export const settingsSlice = createSlice ({
    name: 'settings',
    // initialState: {language: 'de', theme: Types.LIGHT},
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;            
        },
        setTheme: (state, action) => {
            state.theme = action.payload;            
        },
    },
})

export const {
    setLanguage,
    setTheme,
} = settingsSlice.actions;

export default settingsSlice.reducer;