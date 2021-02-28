import './Card.css';
import React from 'react';
import logo from './logo.svg';

class Card extends React.Component {
  render() {
    return (
      <div className='github-profile'>
        <img src={logo} className='profile-pic' alt='profile' />
        <div className='info'>
          <div className='name'>Name here...</div>
          <div className='company'>Company here...</div>
        </div>
      </div>
    );
  }
}

export default Card;
