import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_USER_TEAM_SUCCESS,
  UPDATE_USER_TEAM_FAIL,
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    // TODO: update the user once the endpoints are complete
    case UPDATE_USER_TEAM_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          team: {
            // TODO: this payload is not accurate, just a placeholder
            payload,
          }
        }
      };
    case UPDATE_USER_TEAM_FAIL:
      return {
        ...state,
      }
    default:
      return state;
  }
}
