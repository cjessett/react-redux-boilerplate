import axios from 'axios';

export const REQUEST_ZEN = 'REQUEST_ZEN';
function requestZen() {
  return {
    type: REQUEST_ZEN,
  };
}

export const RECEIVE_ZEN = 'RECEIVE_ZEN';
function receiveZen(zen) {
  return {
    type: RECEIVE_ZEN,
    message: zen,
    receivedAt: Date.now(),
  };
}

export const WAIT_FOR_ZEN = 'WAIT_FOR_ZEN';
function waitForZen() {
  return {
    type: WAIT_FOR_ZEN,
    receivedAt: Date.now(),
  };
}

function fetchZen() {
  return (dispatch) => {
    dispatch(requestZen());
    return axios.get('/api/zen')
      .then(response => response.data)
      .then(zen => dispatch(receiveZen(zen)));
  };
}

const rateLimit = 60000;
function shouldFetchZen(state) {
  const { message, isFetching, lastUpdated } = state.zen;
  const sinceLast = Date.now() - lastUpdated;
  if (!message) {
    return true;
  } else if (isFetching) {
    return false;
  }
  return sinceLast > rateLimit;
}

export function fetchZenIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchZen(getState())) {
      return dispatch(fetchZen());
    }
    return dispatch(waitForZen());
  };
}
