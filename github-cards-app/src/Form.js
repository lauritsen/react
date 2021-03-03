import React from 'react';
import GetGithubUser from './GithubApi';

// TODO: Refactor all class components to function components
// use hook instead of state
// use updater function instead of setState
class Form extends React.Component {
  state = {
    userName: '',
    errorMessage: '',
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await GetGithubUser(this.state.userName);
    if (response.errorMessage) {
      this.setState(response);
    } else {
      this.props.onSubmit(response);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.userName}
          // TODO: Extract logic about managing state to it's own component
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder='GitHub username'
          required
        />
        <button>Add card</button>
        <div className='form-error'>{this.state.errorMessage}</div>
      </form>
    );
  }
}

export default Form;
