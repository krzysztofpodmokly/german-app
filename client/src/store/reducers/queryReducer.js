import * as actionTypes from '../actions/actionTypes';

const initState = {
  loading: true,
  queryData: [],
  error: null,
  queryById: {}
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
    case actionTypes.FETCH_DATA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        queryById: payload
      };
    case actionTypes.FETCH_DATA_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case actionTypes.DELETE_DATA_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.DELETE_DATA_SUCCESS:
      return {
        ...state,
        queryData: state.queryData.filter(
          queryItem => queryItem._id !== payload
        ),
        loading: false
      };
    case actionTypes.DELETE_DATA_FAIL:
      return {
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default queryReducer;
