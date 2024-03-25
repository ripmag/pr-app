import React,{ useState } from 'react';
// import PropTypes from 'prop-types';
import Types from '../../../../classes/types';
import Register from '../../../../classes/register';

import InputBox from '../../form/InputBox';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';

const authData = Register.has(Types.REGISTER_NAME) && Register.get(Types.REGISTER_NAME);

const LoginLayout = (props) => {
    const [email, setEmail] = useState(authData ? authData.email : '');
    const [password, setPassword] = useState(authData ? authData.password : '');
    const { t } = useTranslation();

    const handleOnLogin = () => {
        authData.email = email;
        authData.password = password;

        Register(Types.REGISTER_NAME, authData);
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
                {t('Sign In')}
            </Button>
        </div>
    );
}

// LoginLayout.propTypes = {
    
// };


export default LoginLayout;