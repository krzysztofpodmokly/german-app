import * as actionTypes from '../actions/actionTypes';

const initState = {
  clicked: false
};

const buttonReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.BUTTON_CLICKED:
      return {
        ...state,
        clicked: true
      };
    default:
      return state;
  }
};

export default buttonReducer;
