import reducer from './queryReducer';
import * as actionTypes from '../actions/actionTypes';

describe('query reducer', () => {
  let initState;

  beforeEach(() => {
    initState = {
      loading: true,
      queryData: [],
      error: null,
      queryById: {}
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should fetch data from the database', () => {
    expect(
      reducer(initState, {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: [{ someData: 'data' }]
      })
    ).toEqual({
      loading: false,
      queryData: [{ someData: 'data' }],
      error: null,
      queryById: {}
    });
  });
});
