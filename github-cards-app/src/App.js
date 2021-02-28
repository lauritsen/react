import logo from './logo.svg';
import './App.css';
import React from 'react';

import CardList from './CardList';
import Form from './Form';
import testData from './TestData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
    };
  }
  render() {
    return (
      <div className='App'>
        <h1>The GitHub Cards App</h1>

        <Form />

        <CardList profiles={this.state.profiles} />

        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}

export default App;
