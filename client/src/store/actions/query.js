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

export const fetchDataByIdSuccess = id => async dispatch => {
  try {
    dispatch(fetchDataStart());
    const res = await axios.get('/api/translations/' + id);
    dispatch({
      type: actionTypes.FETCH_DATA_BY_ID_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_DATA_BY_ID_FAIL,
      payload: error
    });
  }
};

export const deleteTranslationStart = () => {
  return {
    type: actionTypes.DELETE_DATA_START
  };
};

export const deleteTranslationSuccess = id => async dispatch => {
  try {
    dispatch(deleteTranslationStart());

    await axios.delete('/api/translations/delete/' + id);

    dispatch({
      type: actionTypes.DELETE_DATA_SUCCESS,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_DATA_FAIL,
      payload: error
    });
  }
};
