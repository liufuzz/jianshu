import axios from 'axios';
import * as constants from './constants';

const changeNoteList = (result) => ({
  type: constants.CHANGE_NOTE_LIST,
  noteList: result
});

export const getNoteList　= (id) => {
  return (dispatch) => {
    axios.get('/api/noteList.json?id=' + id).then((res) => {
      const result = res.data.data
      dispatch(changeNoteList(result));
    })
  }
}