import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>The GitHub Cards App</h1>

        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}

export default App;
