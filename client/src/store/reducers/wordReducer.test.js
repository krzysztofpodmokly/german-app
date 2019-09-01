import reducer from './wordReducer';
import * as actionTypes from '../actions/actionTypes';

describe('word reducer', () => {
  let initState;

  beforeEach(() => {
    initState = {
      wordData: {},
      loading: false,
      error: {}
    };
  });

  it('should fetch random translation from database', () => {
    expect(
      reducer(initState, {
        type: actionTypes.FETCH_TRANSLATION_SUCCESS,
        payload: {
          word: 'some random word',
          translatedWord: 'translated random word'
        }
      })
    ).toEqual({
      wordData: {
        word: 'some random word',
        translatedWord: 'translated random word'
      },
      loading: false,
      error: {}
    });
  });

  it('should change loading property when data fetching process starts', () => {
    expect(
      reducer(initState, {
        type: actionTypes.FETCH_TRANSLATION_START
      })
    ).toEqual({
      loading: true,
      wordData: {},
      error: {}
    });
  });
});
