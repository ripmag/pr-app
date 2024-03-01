import { createSlice } from "@reduxjs/toolkit";
import { settingsModel } from "../models/settings";

export const settingsSlice = createSlice ({
    name: 'settings',
    initialState: settingsModel,
    reducers: {
        setLanguage: (state, action) => {console.log('action.payload',action.payload)
            state.language = action.payload;
        },
    },
})

export const {
    setLanguage
} = settingsSlice.actions;

export default settingsSlice.reducer;