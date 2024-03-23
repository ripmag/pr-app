import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const Button = props => (
    <button
        className={classNames('Button', props.className)}
        disabled={props.disable}
        onClick={props.onClick}
    >
        {props.children}            
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,
    onclick: PropTypes.func,    
};

export default Button;