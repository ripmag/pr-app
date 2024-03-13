import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { useTranslation } from 'react-i18next';
import './common/assets/scss/styles.scss';

import LanguageSelector from './common/components/LanguageSelector';
import ColorThemeSwitcher from './common/components/ColorThemeSwitcher';
import x from './public/IMG_2117.jpg';


const App = (props) => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {t('Hello World')}
        <LanguageSelector/>
        <ColorThemeSwitcher/>
        <img src={x}/>
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