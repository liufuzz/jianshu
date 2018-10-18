import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as noteReducer } from '../pages/note/store';
import { reducer as topicReducer } from '../pages/topic/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  note: noteReducer,
  topic: topicReducer
})

export default reducer;