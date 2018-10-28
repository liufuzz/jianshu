import axios from 'axios';
import * as constants from './constants';

const changeRecommendList = result => ({
  type: constants.CHANGE_RECOMMEND_LIST,
  list: result
});

const changeHotList = result => ({
  type: constants.CHANGE_HOT_LIST,
  list: result
});

const changeCityList = result => ({
  type: constants.CHANGE_CITY_LIST,
  list: result
});

const changeCampusList = result => ({
  type: constants.CHANGE_CAMPUS_LIST,
  list: result
});

export const getRecommendList = () => {
  return dispatch => {
    axios
      .get('/api/topic/recommend.json')
      .then(res => {
        const result = res.data.recommendList;
        dispatch(changeRecommendList(result));
      })
      .catch(() => {
        console.log('error');
      });
  };
};

export const handleHotClick = () => {
  return dispatch => {
    axios
      .get('/api/topic/hot.json')
      .then(res => {
        const result = res.data.recommendList;
        dispatch(changeHotList(result));
      })
      .catch(() => {
        console.log('error');
      });
  };
};

export const handleCityClick = () => {
  return dispatch => {
    axios
      .get('/api/topic/city.json')
      .then(res => {
        const result = res.data.recommendList;
        dispatch(changeCityList(result));
      })
      .catch(() => {
        console.log('error');
      });
  };
};

export const handleCampusClick = () => {
  return dispatch => {
    axios
      .get('/api/topic/campus.json')
      .then(res => {
        const result = res.data.recommendList;
        dispatch(changeCampusList(result));
      })
      .catch(() => {
        console.log('error');
      });
  };
};
