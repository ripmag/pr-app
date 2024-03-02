import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { useTranslation } from 'react-i18next';

import LanguageSelector from './common/components/LanguageSelector';

const App = (props) => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {t('Hello World')}
        <LanguageSelector/>
      </header>
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