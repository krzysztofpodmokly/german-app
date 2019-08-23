import * as actionTypes from '../actions/actionTypes';

const initState = {
  wordData: {},
  loading: true,
  error: {}
};

const wordReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_TRANSLATION_SUCCESS:
      return {
        ...state,
        wordData: payload,
        loading: false
      };
    case actionTypes.FETCH_TRANSLATION_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default wordReducer;
