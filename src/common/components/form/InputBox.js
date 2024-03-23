import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import Input from './Input';
import InputLabel from './InputLabel';
import InputPassword from './InputPassword';

const InputBox = props => {
    const inputEl = useRef(null);
    const {
        className,
        type,
        label,
        autoFocus,
        ...inputProps //extract other props to inputProps
    } = props;

    useEffect(() => {
        if (autoFocus && inputEl.current) {
            inputEl.current.focus()
        }
    }, [inputEl, autoFocus])

    const handleFocus = () => {
        inputEl.current && inputEl.current.focus();
    }

    if (inputProps.disabled) {
        inputProps.onChange = f => f;
    }

    let InputComponent;

    switch (type) {
        case 'password':
            InputComponent = <InputPassword {...inputProps}/>;
            break;
    
        default:
            InputComponent = <Input {...inputProps}/>;
            break;
    }

    return (
        <div
            className={classNames('InputBox', props.className)}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {label && <InputLabel label={label} onInputFocus={handleFocus} />}
            {InputComponent}            
        </div>
    )
};

InputBox.defaultProps = {
    className: '',
    name: '',
    placeholder: '',
    label: '',
    value: '',
    type: 'text',
    autoFocus: false,
    autoComplete: 'off',
    disabled: false,
    enableClearButton: true,
    onBlur: f => f,
    onChange: f => f,
    onFocus: f => f,
};

InputBox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    enableClearButton: PropTypes.bool,
    value: PropTypes.oneOf([
        PropTypes.string,
    ]),
    type: PropTypes.oneOf([
        'text',
        'password',
    ]),    
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func, 
};

export default InputBox;