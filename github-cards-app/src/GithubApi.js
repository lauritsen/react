import axios from 'axios';

const GetGithubUser = async (userName) =>
  await axios.get(`https://api.github.com/users/${userName}`).catch((error) => {
    if (error.response) {
      return {
        errorMessage: `Error: ${error.response.status} ${error.response.data.message}`,
      };
    } else {
      return {
        errorMessage: `Error: ${error.message}`,
      };
    }
  });

export default GetGithubUser;
