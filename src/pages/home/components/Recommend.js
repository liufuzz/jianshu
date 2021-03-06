import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem, RecommendMore } from '../style';

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map(item => {
          return (
            <RecommendItem key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
              <span>{item.get('title')}</span>
            </RecommendItem>
          );
        })}
        <Link to="/topic">
          <RecommendMore>
            更多热门专题
            <Icon className="antd-icon" type="right" theme="outlined" />
          </RecommendMore>
        </Link>
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(
  mapState,
  null
)(Recommend);
