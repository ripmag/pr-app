import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import AppConfig from '../../AppConfig';

const AuthRoute = ({ isLogged }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged){
           return navigate(AppConfig.defines.AUTH_URL);
        }
     }, [isLogged, navigate]);
   
    return null;
};

const mapStateToProps = (state, ownProps) => {
    const { isLogged } = state.user;
  
    return {
        isLogged
    }
  }
  
export default connect(mapStateToProps, undefined)(AuthRoute);