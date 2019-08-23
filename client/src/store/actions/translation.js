import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTranslation = () => async dispatch => {
  try {
    const res = await axios.get('/api/translations/random'); //res.data => array always with one element => check GET /api/translations/random route

    const [data] = res.data;

    dispatch({
      type: actionTypes.FETCH_TRANSLATION_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_TRANSLATION_FAILURE,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};
