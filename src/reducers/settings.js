// import { SettingsModel } from "../models/settings";
import Types from "../classes/types";

const initialState = {
    language: Types.LANGUAGE_EN,
    theme: Types.LIGHT,
}

const settings = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default settings;