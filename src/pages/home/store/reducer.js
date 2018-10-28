import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  slideList: [],
  recommendList: [],
  noteList: [],
  noteListPage: 1,
  boardList: [],
  authorsList: [],
  spin: false,
  authorsPage: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_LIST:
      return state.merge({
        slideList: fromJS(action.slideList),
        recommendList: fromJS(action.recommendList),
        noteList: fromJS(action.noteList),
        boardList: fromJS(action.boardList)
      });
    case constants.CHANGE_HOME_MORE_LIST:
      return state.merge({
        noteList: state.get('noteList').concat(fromJS(action.noteMoreList)),
        noteListPage: action.nextPage
      });
    case constants.CHANGE_AURHORS_LIST:
      return state.merge({
        authorsList: fromJS(action.authorsList),
        authorsPage: action.page
      });
    case constants.HANDLE_SWITCH_CLICK:
      return state.set('spin', !state.get('spin'));
    default:
      return state;
  }
};
