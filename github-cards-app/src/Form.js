import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action=''>
        <input type='text' placeholder='GitHub username' />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
