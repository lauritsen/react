import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    userName: '',
    errorMessage: '',
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .catch((error) => {
        if (error.response) {
          this.setState({
            errorMessage: `Error: ${error.response.status} ${error.response.data.message}`,
          });
        } else {
          this.setState({
            errorMessage: `Error: ${error.message}`,
          });
        }
      });
    if (response) {
      this.props.onSubmit(response.data);
      this.setState({ userName: '', errorMessage: '' });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.userName}
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
