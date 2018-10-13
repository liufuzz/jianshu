import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  slideList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST:
      return state.merge({
        slideList: fromJS(action.slideList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state;
  }
}