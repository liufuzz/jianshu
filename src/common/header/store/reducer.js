import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  spin: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_INPUT_FOCUS:
      return state.set('focused', action.value);
    case constants.CHANGE_INPUT_BLUR:
      return state.set('focused', action.value);
    case constants.INPUT_MOUSE_ENTER:
      return state.set('mouseIn', action.value);
    case constants.INPUT_MOUSE_LEAVE:
      return state.set('mouseIn', action.value);
    case constants.GET_INPUT_LIST:
      return state.set('list', action.data);
    case constants.CHANGE_PAGE:
      return state.merge({
        page: action.page,
        spin: !state.get('spin')
      });
    default:
      return state;
  }
};
