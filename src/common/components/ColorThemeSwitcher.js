import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-dropdown'
import AppConfig from '../../AppConfig';
import { setTheme } from '../../reducers/settingsSlice';


const ColorThemeSwitcher = ({theme}) => {
    const options = AppConfig.colorsThemes;
    const dispatch = useDispatch();

    const onSetTheme = ({value}) => {
        dispatch(setTheme(value));

        document.body.classList.remove(...options);
        document.body.classList.add(value);
    }
    
    return (
        <div className='ColorThemeSwitcher'>
            <Dropdown
                options={options}
                value={theme}
                onChange={onSetTheme}
            />
        </div>        
    );
}

function mapStateToProps(state) {
    const { theme } = state.settings;
    return {
        theme
    };
}
export default connect(mapStateToProps,)(ColorThemeSwitcher);