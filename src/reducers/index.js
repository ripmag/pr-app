import { combineReducers } from 'redux';
// import settings from './settings';
import settingsReducer from './settingsSlice';


export default combineReducers ({
    settings: settingsReducer,
})