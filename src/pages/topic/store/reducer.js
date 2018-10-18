import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  list: [],
  recommend: true,
  hot: false,
  city: false,
  campus: false
});

// const Merged = (state, action, boolen) => {
//   return state.merge({
//     list: fromJS(action.list),
//     recommend: true,
//     hot: false,
//     city: false,
//     campus: false
//   })
// };

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_RECOMMEND_LIST:
      return state.merge({
        list: fromJS(action.list),
        recommend: true,
        hot: false,
        city: false,
        campus: false
      });
    case constants.CHANGE_HOT_LIST:
      return state.merge({
        list: fromJS(action.list),
        recommend: false,
        hot: true,
        city: false,
        campus: false
      });
    case constants.CHANGE_CITY_LIST:
      return state.merge({
        list: fromJS(action.list),
        recommend: false,
        hot: false,
        city: true,
        campus: false
      });
    case constants.CHANGE_CAMPUS_LIST:
      return state.merge({
        list: fromJS(action.list),
        recommend: false,
        hot: false,
        city: false,
        campus: true
      });
    default:
      return state;
  }
}