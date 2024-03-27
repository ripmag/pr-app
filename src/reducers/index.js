import { combineReducers } from 'redux';
// import settings from './settings';
import settingsReducer from './settingsSlice';
import userReducer from './userSlice';


export default combineReducers ({
    user: userReducer,
    settings: settingsReducer,
})