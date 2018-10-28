import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultStae = fromJS({
  noteList: []
});

export default (state = defaultStae, action) => {
  if (action.type === constants.CHANGE_NOTE_LIST) {
    return state.set('noteList', action.noteList);
  }
  return state;
};
