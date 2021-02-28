import logo from './logo.svg';
import './App.css';
import React from 'react';

import CardList from './CardList';
import Form from './Form';

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className='App'>
        <h1>The GitHub Cards App</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}

export default App;
