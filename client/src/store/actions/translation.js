import * as actionTypes from './actionTypes';
import axios from 'axios';

export const postTranslationStart = () => {
  return {
    type: actionTypes.FETCH_TRANSLATION_START
  };
};

export const postTranslationSuccess = translationData => async dispatch => {
  try {
    dispatch(postTranslationStart());

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/translations', translationData, config);

    dispatch({
      type: actionTypes.FETCH_TRANSLATION_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: actionTypes.POST_TRANSLATION_FAILURE, payload: error });
  }
};
