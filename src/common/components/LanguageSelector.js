import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import Dropdown from 'react-dropdown'
import AppConfig from '../../AppConfig';
import { setLanguage } from '../../reducers/settingsSlice';


const LanguageSelector = ({language}) => {
    const options = AppConfig.languages;
    const dispatch = useDispatch();
    
    return (
        <div className='LanguageSelector'>
            <Dropdown
                options={options}
                placeholder={'Select language'}
                value={language}
                onChange={(e) => dispatch(setLanguage(e.value))}
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