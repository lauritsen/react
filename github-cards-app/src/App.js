import logo from './logo.svg';
import './App.css';
import React from 'react';

import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>The GitHub Cards App</h1>

        <Card />

        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}

export default App;
