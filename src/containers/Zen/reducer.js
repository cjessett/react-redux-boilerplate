import { REQUEST_ZEN, RECEIVE_ZEN, WAIT_FOR_ZEN } from './actions';

function zen(state = { isFetching: false, message: '' }, action) {
  switch (action.type) {
    case REQUEST_ZEN:
      return { ...state, isFetching: true };
    case RECEIVE_ZEN:
      return {
        ...state,
        isFetching: false,
        message: action.message,
        lastUpdated: action.receivedAt,
        waitLeft: 0,
      };
    case WAIT_FOR_ZEN:
      return {
        ...state,
        waitLeft: 60 - ((action.receivedAt - state.lastUpdated) / 1000),
      };
    default:
      return state;
  }
}

export default zen;
