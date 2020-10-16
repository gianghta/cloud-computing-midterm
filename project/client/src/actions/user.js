import {
  UPDATE_USER_TEAM_SUCCESS,
  UPDATE_USER_TEAM_FAIL,
  SET_MESSAGE,
} from './types';

import UserService from '../services/user.service';


// TODO: polish up both of these functions, such as payloads, data, etc.


export const updateUserTeam = (username, team) => (dispatch) => {
  return UserService.updateCurrentUserTeam(username, team).then(
    (data) => {
      console.log(data);
      // TODO: see what data is being sent
      dispatch({
        type: UPDATE_USER_TEAM_SUCCESS,
        payload: data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: UPDATE_USER_TEAM_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
