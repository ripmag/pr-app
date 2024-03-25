import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import MobileLayout from './common/components/auth/MobileLayout';
import MainPage from './common/pages/MainPage';

import AppConfig from './AppConfig';

if (AppConfig.features.isEnableRsponsiveMode) {
  document.documentElement.setAttribute('responsive', "true")
}

const App = (props) => {
  return (
    <div className="App">
      <Routes>
        <Route
          path={AppConfig.defines.AUTH_URL}
          element={<MobileLayout />}
        />
        <Route
          path={AppConfig.defines.MAIN_URL}
          element={<MainPage />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { language } = state.settings;

  return {
    language
  }
}

export default connect(mapStateToProps, undefined)(App);