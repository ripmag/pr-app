import { SettingsModel } from "../models/settings";

const settings = (state = new SettingsModel(), action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default settings;