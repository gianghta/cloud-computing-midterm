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

  updateCurrentUserTeam(username, team) {
    return axios.put(API_URL + `update-team/${username}`, team, { headers: authHeader() })
      .then((response) => {
        let localStorageUser = JSON.parse(localStorage.getItem('user'));
        localStorageUser.team = response.data.team;
        if (localStorageUser.accessToken) {
          localStorage.setItem('user', JSON.stringify(localStorageUser));
        }

        return response.data;
      });
  }

  getAllUsers() {
    return axios.get(API_URL + 'all-user', { headers: authHeader() });
  }

  getAllUserScores() {
    return axios.get(API_URL + 'return-all-scores', { headers: authHeader() });
  }
}

export default new UserService();