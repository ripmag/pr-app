import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import ToggleVisibility from './ToggleVisibility';

const InputPassword = props => {
    const [isVisible, setVisible] = useState(false);

    const toggleVisible = () => {setVisible(!isVisible)};

    return (
        <div className='InputPassword'>
            <Input
                type={isVisible ? 'text' : 'password'}
                {...props}
            />
            <ToggleVisibility
                isVisible={isVisible}
                onClick={toggleVisible}            
            />
        </div>
    )
};

InputPassword.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func, 
};

export default InputPassword;