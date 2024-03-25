import React from 'react';
// import PropTypes from 'prop-types';

import LoginLayout from './layouts/LoginLayout';

const MobileLayout = (props) => {
    const getLoginLayout = () => {
        return <LoginLayout />
    }

    return (
        <div className='MobileLayout'>
            {getLoginLayout()}
        </div>
    );
}

// MobileLayout.propTypes = {
// };

export default MobileLayout;