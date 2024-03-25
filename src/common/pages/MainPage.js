import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import AppConfig from '../../AppConfig';
import LanguageSelector from '../components/LanguageSelector';
import ColorThemeSwitcher from '../components/ColorThemeSwitcher';

const MainPage = (props) => {
    const { t } = useTranslation();
    return (
        <div className="MainPage">
            {t('MAIN PAGE')}
            <LanguageSelector />
            <ColorThemeSwitcher />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const { language } = state.settings;

    return {
        language
    }
}

export default connect(mapStateToProps, undefined)(MainPage);