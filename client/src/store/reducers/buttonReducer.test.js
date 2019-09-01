import reducer from './buttonReducer';
import * as actionTypes from '../actions/actionTypes';

describe('button reducer', () => {
  it('should changed boolean "clicked" property', () => {
    expect(
      reducer({ clicked: false }, { type: actionTypes.BUTTON_CLICKED })
    ).toEqual({
      clicked: true
    });
  });
});
