import * as actionTypes from '../actions/actionTypes';

const initState = [];

const alertReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ALERT:
      return [...state, payload];
    case actionTypes.REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
