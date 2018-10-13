import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  slideList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST:
      return state.set('slideList', action.slideList);
    default:
      return state;
  }
}