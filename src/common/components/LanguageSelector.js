import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import Dropdown from 'react-dropdown'
import AppConfig from '../../AppConfig';
import { setLanguage } from '../../reducers/settingsSlice';


const LanguageSelector = ({language}) => {
    const options = AppConfig.languages;
    const dispatch = useDispatch();
    const { i18n } = useTranslation();            

    const onSetLanguage = ({value}) => {
        i18n.changeLanguage(value);
        dispatch(setLanguage(value));
    }
    
    return (
        <div className='LanguageSelector'>
            <Dropdown
                options={options}
                placeholder={'Select language'}
                value={language}
                onChange={onSetLanguage}
            />
        </div>        
    );
}

function mapStateToProps(state) {
    const { language } = state.settings;
    return {
        language
    };
}
export default connect(mapStateToProps,)(LanguageSelector);