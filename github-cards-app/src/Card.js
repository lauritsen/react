import './Card.css';
import React from 'react';

const Card = (props) => (
  <div className='github-profile'>
    <img src={props.profile.avatar_url} className='profile-pic' alt='profile' />
    <div className='info'>
      <div className='name'>{props.profile.name}</div>
      <div className='company'>{props.profile.company}</div>
    </div>
  </div>
);

export default Card;
