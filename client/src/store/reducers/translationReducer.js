import * as actionTypes from '../actions/actionTypes';

const initState = {
  newTranslation: null,
  loading: true,
  error: null
};

const translationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.POST_TRANSLATION_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.POST_TRANSLATION_SUCCESS:
      return {
        ...state,
        newTranslation: payload,
        loading: false
      };
    case actionTypes.POST_TRANSLATION_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default translationReducer;
