import axios from 'axios';
import * as constants from './constants';

const changeHomeList = (result) => ({
  type: constants.CHANGE_HOME_LIST,
  slideList: result.slideList,
  recommendList: result.recommendList,
  noteList: result.noteList,
  boardList: result.boardList
});

const changeHomeMoreList = (result, nextPage) => ({
  type: constants.CHANGE_HOME_MORE_LIST,
  noteMoreList: result.noteMoreList,
  nextPage
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeList(result));
    }).catch(() => {
      console.log('error')
    })
  }
};

export const getMoreData = (page) => {
  return (dispatch) => {
    axios.get('/api/homeMoreList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(changeHomeMoreList(result, page + 1));
    })
  }
}