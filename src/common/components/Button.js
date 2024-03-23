import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const Button = props => (
    <button
        className={classNames('Button', props.className)}
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.children}            
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,    
};

export default Button;