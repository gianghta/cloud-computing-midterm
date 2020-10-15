import axios from 'axios';
import authHeader from './auth-header';

// TODO: update this entire file
const API_URL = '/api/';

class PlayersService {
  getQuarterbacks() {
    return axios
      .get(API_URL + 'quarterbacks/all', { headers: authHeader() })
      .then((response) => {
        return response;
      });
  }

  getRunningBacks() {
    return axios
      .get(API_URL + 'runningbacks/all', { headers: authHeader() })
      .then((response) => {
        return response;
      });
  }

  getWideReceivers() {
    return axios
      .get(API_URL + 'widereceivers/all', { headers: authHeader() })
      .then((response) => {
        return response;
      });
  }

  getTightEnds() {
    return axios
      .get(API_URL + 'tightends/all', { headers: authHeader() })
      .then((response) => {
        return response;
      });
  }
}

export default new PlayersService();
