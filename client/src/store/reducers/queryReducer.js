import * as actionTypes from '../actions/actionTypes';

const initState = {
  loading: true,
  queryData: [],
  error: null
};

const queryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        queryData: payload
      };
    case actionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default queryReducer;
