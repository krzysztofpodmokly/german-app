import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTranslationStart = () => {
  return {
    type: actionTypes.FETCH_TRANSLATION_START
  };
};

export const fetchTranslationSuccess = () => async dispatch => {
  try {
    dispatch(fetchTranslationStart());
    const res = await axios.get('/api/translations/random'); //res.data => array always with one element => check GET /api/translations/random route

    const [data] = res.data;

    dispatch({
      type: actionTypes.FETCH_TRANSLATION_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_TRANSLATION_FAILURE,
      payload: error
    });
  }
};
