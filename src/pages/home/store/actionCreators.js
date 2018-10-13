import axios from 'axios';
import * as constants from './constants';

const changeHomeList = (result) => ({
  type: constants.CHANGE_HOME_LIST,
  slideList: result.slideList,
  recommendList: result.recommendList,
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeList(result))
    }).catch(() => {
      console.log('error')
    })
  }
}