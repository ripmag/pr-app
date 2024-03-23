import React from "react";
import PropTypes from 'prop-types'

const InputLabel = ({label, onInputFocus}) => (
    <label
        className='InputLabel'
        onClick={onInputFocus}
    >
        {label}
    </label>
);

InputLabel.propTypes = {
    label: PropTypes.string.isRequired,
}

InputLabel.defaultProps = {
    onInputFocus: f => f,
}

export default InputLabel;