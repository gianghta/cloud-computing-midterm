import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  // getCurrentUserTeam(username) {
  //   return axios.get(API_URL + `current-user/${username}`, { headers: authHeader() })
  //     .then((response) => {
  //       // TODO: not sure is this will get the actual team data yet, need to test
  //       return response.data.team;
  //     });
  // }

  updateCurrentUserTeam(username, team) {
    // TODO: fill in once endpoint complete
  }

  getAllUsers() {
    return axios.get(API_URL + 'all-user', { headers: authHeader() });
  }
}

export default new UserService();