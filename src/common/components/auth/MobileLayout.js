import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';

import LoginLayout from './layouts/LoginLayout';

const MobileLayout = (props) => {
    const getLoginLayout = () => {
        return <LoginLayout />
    }

    const getTime = (dateTime) => {
        if (!moment(dateTime,'DD.MM.YYYY HH:mm:ss').isValid()) {
            console.log('is not Valid', dateTime)
            return dateTime;
        }

        const today = moment().format('DD.MM.YYYY');
        const yesterday = moment().subtract(1, 'days').format('DD.MM.YYYY');
        const time = moment(dateTime, 'DD.MM.YYYY HH:mm:ss').format(' HH:mm:ss');
        let date = moment(dateTime, 'DD.MM.YYYY HH:mm:ss').format('DD.MM.YYYY');

        console.log('moment date + time = ', date, time);
        if (date === today) {
            date = 'today';
        }

        if (date === yesterday) {
            date = 'yesterday';
        }

        console.log('date + time = ', date, time);

        return date + time;

    }

    return (
        <div className='MobileLayout'>
            <div>{getTime('17.06.2024 00:01:00')}</div>
            <div>{getTime('16.06.2024 00:01:00')}</div>
            <div>{getTime('15.06.2024 00:01:00')}</div>
            <div>{getTime('11.06.2024 00:01:00')}</div>
            {getLoginLayout()}
        </div>
    );
}

// MobileLayout.propTypes = {
// };

export default MobileLayout;