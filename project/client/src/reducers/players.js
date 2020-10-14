import {
  GET_QUARTERBACKS,
  GET_QUARTERBACKS_FAIL,
  GET_RUNNING_BACKS,
  GET_RUNNING_BACKS_FAIL,
  GET_WIDE_RECEIVERS,
  GET_WIDE_RECEIVERS_FAIL,
  GET_TIGHT_ENDS,
  GET_TIGHT_ENDS_FAIL,
} from '../actions/types';


const initialState = {
  quarterbacks: [],
  runningBacks: [],
  wideReceivers: [],
  tightEnds: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUARTERBACKS:
      return {
        ...state,
        quarterbacks: payload.quarterbacks,
      };
    case GET_QUARTERBACKS_FAIL:
      return {
        ...state,
        quarterbacks: [],
      };
    case GET_RUNNING_BACKS:
      return {
        ...state,
        runningBacks: payload.runningBacks,
      };
    case GET_RUNNING_BACKS_FAIL:
      return {
        ...state,
        runningBacks: [],
      };
    case GET_WIDE_RECEIVERS:
      return {
        ...state,
        wideReceivers: payload.wideReceivers,
      };
    case GET_WIDE_RECEIVERS_FAIL:
      return {
        ...state,
        wideReceivers: [],
      };
    case GET_TIGHT_ENDS:
      return {
        ...state,
        tightEnds: payload.tightEnds,
      };
    case GET_TIGHT_ENDS_FAIL:
      return {
        ...state,
        tightEnds: [],
      };
    default:
      return state;
  }
}
