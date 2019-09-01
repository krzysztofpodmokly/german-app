import reducer from './translationReducer';
import * as actionTypes from '../actions/actionTypes';

describe('translation reducer', () => {
  let initState;

  beforeEach(() => {
    initState = {
      newTranslation: null,
      loading: true,
      error: null
    };
  });

  it('should post new translation to database', () => {
    expect(
      reducer(initState, {
        type: actionTypes.POST_TRANSLATION_SUCCESS,
        payload: [
          { word: 'Some german word', translatedWord: 'Polish translation' }
        ]
      })
    ).toEqual({
      newTranslation: [
        { word: 'Some german word', translatedWord: 'Polish translation' }
      ],
      loading: false,
      error: null
    });
  });

  it('should provide an error if server does not respond', () => {
    expect(
      reducer(initState, {
        type: actionTypes.POST_TRANSLATION_FAILURE,
        payload: {
          msg: 'Error message',
          status: 500
        }
      })
    ).toEqual({
      newTranslation: null,
      loading: false,
      error: {
        msg: 'Error message',
        status: 500
      }
    });
  });
});
