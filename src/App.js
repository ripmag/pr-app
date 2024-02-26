import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
  console.log('this.props',props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.language}
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