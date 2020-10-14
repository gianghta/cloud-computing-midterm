import axios from 'axios';

// TODO: update this entire file
const API_URL = '/api//';

class PlayersService {
  getQuarterbacks() {
    return axios
      .get(API_URL + 'quarterbacks')
      .then((response) => {
        //
      });
  }

  getRunningBacks() {
    return axios
      .get(API_URL + 'runningbacks')
      .then((response) => {
        //
      });
  }

  getWideReceivers() {
    return axios
      .get(API_URL + 'widereceivers')
      .then((response) => {
        //
      });
  }

  getTightEnds() {
    return axios
      .get(API_URL + 'tightends')
      .then((response) => {
        //
      });
  }
}

export default new PlayersService();
