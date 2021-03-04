import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import CardList from './CardList';
import Form from './Form';

const App = (props) => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData]);
  };

  return (
    <div className='App'>
      <h1>The GitHub Cards App</h1>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
};

export default App;
