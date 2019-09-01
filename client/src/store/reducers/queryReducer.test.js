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

  it('should fetch data by a give id from the database', () => {
    expect(
      reducer(initState, {
        type: actionTypes.FETCH_DATA_BY_ID_SUCCESS,
        payload: { dataById: 'data' }
      })
    ).toEqual({
      loading: false,
      queryData: [],
      error: null,
      queryById: { dataById: 'data' }
    });
  });

  it('should delete an item by a given id', () => {
    expect(
      reducer(initState, {
        type: actionTypes.DELETE_DATA_SUCCESS,
        payload: 'some-random-id'
      })
    ).toEqual({
      loading: false,
      queryData: initState.queryData.filter(
        data => data._id !== 'some-random-id'
      ),
      error: null,
      queryById: {}
    });
  });
});
