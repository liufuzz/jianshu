import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const getInputList = data => ({
  type: constants.GET_INPUT_LIST,
  data: fromJS(data)
});

export const handleInputFocus = () => ({
  type: constants.CHANGE_INPUT_FOCUS,
  value: true
});

export const handleInputBlur = () => ({
  type: constants.CHANGE_INPUT_BLUR,
  value: false
});

export const handleMouseEnter = () => ({
  type: constants.INPUT_MOUSE_ENTER,
  value: true
});

export const handleMouseLeave = () => ({
  type: constants.INPUT_MOUSE_LEAVE,
  value: false
});

export const getHeaderList = () => {
  return dispatch => {
    axios.get('/api/headerList.json').then(res => {
      const result = res.data.data;
      dispatch(getInputList(result));
    });
  };
};

export const handleSwitchClick = (page, spin) => ({
  type: constants.CHANGE_PAGE,
  page,
  spin: !spin
});
