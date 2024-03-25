import Types from "./classes/types";

const AppConfig = {
    defines: {
        'MAIN_URL': '/',
        'AUTH_URL': '/auth',
    },
    languages: [
        Types.LANGUAGE_EN,
        Types.LANGUAGE_RU,
    ],
    colorsThemes: [
        Types.DARK,
        Types.LIGHT,
    ],
    features: {
        isEnableRsponsiveMode: true,
    }

}

export default AppConfig;