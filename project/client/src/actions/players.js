import {
  GET_QUARTERBACKS,
  GET_QUARTERBACKS_FAIL,
  GET_RUNNING_BACKS,
  GET_RUNNING_BACKS_FAIL,
  GET_WIDE_RECEIVERS,
  GET_WIDE_RECEIVERS_FAIL,
  GET_TIGHT_ENDS,
  GET_TIGHT_ENDS_FAIL,
  SET_MESSAGE,
} from './types';

import PlayersService from '../services/players.service';

export const getQuarterbacks = () => (dispatch) => {
  return PlayersService.getQuarterbacks().then(
    (response) => {
      dispatch({
        type: GET_QUARTERBACKS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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
        type: GET_QUARTERBACKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getRunningBacks = () => (dispatch) => {
  return PlayersService.getRunningBacks().then(
    (response) => {
      dispatch({
        type: GET_RUNNING_BACKS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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
        type: GET_RUNNING_BACKS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getWideReceivers = () => (dispatch) => {
  return PlayersService.getWideReceivers().then(
    (response) => {
      dispatch({
        type: GET_WIDE_RECEIVERS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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
        type: GET_WIDE_RECEIVERS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const getTightEnds = () => (dispatch) => {
  return PlayersService.getTightEnds().then(
    (response) => {
      dispatch({
        type: GET_TIGHT_ENDS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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
        type: GET_TIGHT_ENDS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
