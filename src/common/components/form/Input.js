import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const Input = props => {

    return (
        <div className={classNames('Input', props.className, {disabled: props.disabled})}>
            {!!props.textBefore && <span className='Input__textBefore'>{props.textBefore}</span>}
            <input
                ref={props.inputEl}
                className='Input__input'
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                type={props.type}
                autoComplete={props.autoComplete}
                disabled={props.disabled}
                onBlur={props.onBlur}
                onChange={e => props.onChange(e.target.value)}
                onFocus={props.onFocus}
            >
                {props.children}            
            </input>
            {!!props.textAfter && <span className='Input__textAfter'>{props.textAfter}</span>}
            {!!props.value && !props.disabled && props.enableClearButton && (
                <div
                    className='Input__clear'
                    onClick={() => props.onChange('')}
                >
                    X
                </div>
            )}
        </div>
    )
};

Input.defaultProps = {
    className: '',
    placeholder: '',
    value: '',
    type: 'text',
    autoComplete: 'off',
    textBefore: '',
    textAfter: '',
    disabled: false,
    enableClearButton: true,
    onBlur: f => f,
    onChange: f => f,
    onFocus: f => f,
};

Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    textBefore: PropTypes.string,
    textAfter: PropTypes.string,
    disabled: PropTypes.bool,
    enableClearButton: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

export default Input;