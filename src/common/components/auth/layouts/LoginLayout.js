import React,{ useState } from 'react';
// import PropTypes from 'prop-types';
import Types from '../../../../classes/types';
import Register from '../../../../classes/register';

import InputBox from '../../form/InputBox';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';
import { fetchApi } from '../../../../services';
import { useDispatch } from 'react-redux';
import { loginSuccess, logOut } from '../../../../reducers/userSlice';

const authData = Register.has(Types.REGISTER_NAME) && Register.get(Types.REGISTER_NAME);

const LoginLayout = (props) => {
    const [email, setEmail] = useState(authData ? authData.email : '');
    const [password, setPassword] = useState(authData ? authData.password : '');
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleOnLogin = () => {
        let authData = {};
        authData.email = email;
        authData.password = password;

        Register.set(Types.REGISTER_NAME, authData);
        fetchApi.post('http://127.0.0.1:8000/api/createToken/',{'email':email, 'password': password})
        .then(response => {
            const token = response?.data?.access;
            if (token) {
                dispatch(loginSuccess());
            } else {
                dispatch(logOut());
            }
        })

    }
    
    return (
        <div className='LoginLayout'>
            <InputBox
                label={t('Email')}
                value={email}
                onChange={setEmail}
            />
            <InputBox
                label={t('Password')}
                value={password}
                onChange={setPassword}
                type='password'
            />
            <Button
                onClick={handleOnLogin}
            >
                {t('Log In')}
            </Button>
        </div>
    );
}

// LoginLayout.propTypes = {
    
// };


export default LoginLayout;