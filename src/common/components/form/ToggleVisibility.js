import React from 'react';
import PropTypes from 'prop-types';

const ToggleVisibility = ({isVisible, onClick}) => (
    <div
        className='ToggleVisibility'
        onClick={onClick}
    >
        {isVisible ? 'visible ICON' : 'unvisible'}
    </div>
);

ToggleVisibility.propTypes = {
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,    
};

export default ToggleVisibility;