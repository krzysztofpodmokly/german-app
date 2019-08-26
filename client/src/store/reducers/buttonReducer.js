import * as actionTypes from '../actions/actionTypes';

const initState = {
  show: false
};

const buttonReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_BUTTON:
      return {
        ...state,
        show: true
      };
    default:
      return state;
  }
};

export default buttonReducer;
