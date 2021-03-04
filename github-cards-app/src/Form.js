import React, { useState } from 'react';
import GetGithubUser from './GithubApi';

const Form = (props) => {
  const [state, setState] = useState({
    userName: '',
    errorMessage: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await GetGithubUser(state.userName);
    if (response.errorMessage) {
      setState({ errorMessage: response.errorMessage });
    } else {
      setState({ userName: '' });
      event.target.reset();
      props.onSubmit(response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={state.userName}
        // TODO: Extract logic about managing state to it's own component
        onChange={(event) => setState({ userName: event.target.value })}
        placeholder='GitHub username'
        required
      />
      <button>Add card</button>
      <div className='form-error'>{state.errorMessage}</div>
    </form>
  );
};

export default Form;
