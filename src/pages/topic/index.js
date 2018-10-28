import React, { PureComponent } from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import TopicImg from "../../statics/topic.png";
import {
  TopicWrapper,
  Menu,
  MenuItem,
  TopicRow,
  TopicCol,
  TopicColWrap,
  Follow,
  Count
} from "./style";

class Topic extends PureComponent {
  render() {
    const {
      list,
      recommend,
      city,
      hot,
      campus,
      handleRecommendClick,
      handleHotClick,
      handleCityClick,
      handleCampusClick
    } = this.props;
    return (
      <TopicWrapper>
        <img src={TopicImg} alt="" />
        <Menu>
          <MenuItem
            className={recommend ? "active" : ""}
            onClick={() => handleRecommendClick(recommend)}
          >
            <Icon className="antd-icon" type="star" theme="filled" />
            推荐
          </MenuItem>
          <MenuItem
            className={hot ? "active" : ""}
            onClick={() => handleHotClick(hot)}
          >
            <Icon className="antd-icon" type="fire" theme="filled" />
            热门
          </MenuItem>
          <MenuItem
            className={city ? "active" : ""}
            onClick={() => handleCityClick(city)}
          >
            <Icon className="antd-icon" type="bank" theme="filled" />
            城市
          </MenuItem>
          <MenuItem
            className={campus ? "active" : ""}
            onClick={() => handleCampusClick(campus)}
          >
            <Icon className="antd-icon" type="flag" theme="filled" />
            校园
          </MenuItem>
        </Menu>
        <TopicRow>
          {list.map(item => {
            return (
              <TopicCol key={item.get("id")}>
                <TopicColWrap>
                  <span className="blank">
                    <img className="avatar" src={item.get("avatar")} alt="" />
                    <h4 className="name">{item.get("name")}</h4>
                    <p className="desc">{item.get("desc")}</p>
                  </span>
                  <Follow>
                    <Icon type="plus" theme="outlined" />
                    <span>关注</span>
                  </Follow>
                  <hr />
                  <Count>
                    <span>{item.get("count")} 篇文章</span> ·{" "}
                    {item.get("followed")} 人关注
                  </Count>
                </TopicColWrap>
              </TopicCol>
            );
          })}
        </TopicRow>
      </TopicWrapper>
    );
  }

  componentDidMount() {
    this.props.getRecommendList();
  }
}

const mapState = state => ({
  list: state.getIn(["topic", "list"]),
  recommend: state.getIn(["topic", "recommend"]),
  hot: state.getIn(["topic", "hot"]),
  city: state.getIn(["topic", "city"]),
  campus: state.getIn(["topic", "campus"])
});

const mapDispatch = dispatch => ({
  getRecommendList() {
    dispatch(actionCreators.getRecommendList());
  },
  handleRecommendClick(recommend) {
    if (!recommend) {
      dispatch(actionCreators.getRecommendList());
    }
  },
  handleHotClick(hot) {
    if (!hot) {
      dispatch(actionCreators.handleHotClick());
    }
  },
  handleCityClick(city) {
    if (!city) {
      dispatch(actionCreators.handleCityClick());
    }
  },
  handleCampusClick(campus) {
    if (!campus) {
      dispatch(actionCreators.handleCampusClick());
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Topic);
