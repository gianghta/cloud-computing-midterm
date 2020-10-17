import {
  UPDATE_USER_TEAM_SUCCESS,
  UPDATE_USER_TEAM_FAIL,
  SET_MESSAGE,
} from './types';

import UserService from '../services/user.service';


export const updateUserTeam = (username, team) => (dispatch) => {
  return UserService.updateCurrentUserTeam(username, team).then(
    (data) => {
      dispatch({
        type: UPDATE_USER_TEAM_SUCCESS,
        payload: data.team,
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
