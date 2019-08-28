import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchDataStart = () => {
  return {
    type: actionTypes.FETCH_DATA_START
  };
};

export const fetchDataSuccess = keystroke => async dispatch => {
  try {
    dispatch(fetchDataStart());
    console.log('here');
    const queryParams = `?search=${keystroke}`;
    const res = await axios.get('/api/translations' + queryParams);
    dispatch({
      type: actionTypes.FETCH_DATA_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_DATA_FAIL,
      payload: error
    });
  }
};