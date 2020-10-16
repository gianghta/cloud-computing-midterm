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
}

export default new UserService();