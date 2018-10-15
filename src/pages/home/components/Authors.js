import React, { PureComponent } from 'react';
import { Icon, Avatar } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { CSSTransition } from 'react-transition-group';
import { AuthorsWrapper, AuthorsTitle, AuthorsList, AuthorsItem, AuthorsMore } from '../style';

class Authors extends PureComponent {
  render() {
    const { list, spin, page, handleSwitchClick } = this.props;
    const nFormatter = (num) => {
      return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
    }
    return (
      <AuthorsWrapper>
        <AuthorsTitle>
          <span>推荐作者</span>
          <span
            className='page-change'
            onClick={() => handleSwitchClick(page)}
          >
            <CSSTransition
              in={spin}
              timeout={200}
              classNames='spin'
            >
              <Icon className='sync-icon' type='sync' theme='outlined' />
            </CSSTransition>
            换一批
          </span>
        </AuthorsTitle>
        <AuthorsList>
          {
            list.map((item) => {
              return (
                <AuthorsItem key={item.get('id')}>
                  <Avatar
                    className="avatar"
                    size={48}
                    src={item.get('avatar_source')}
                  ></Avatar>
                  <span className='follow'>
                    <Icon type="plus" theme="outlined" />
                    关注
                  </span>
                  <span className="name">{item.get('nickname')}</span>
                  <p>写了 {nFormatter(item.get('total_wordage'))} 字 · {nFormatter(item.get('total_likes_count'))} 喜欢</p>
                </AuthorsItem>
              )
            })
          }
        </AuthorsList>
        <AuthorsMore>
          查看全部
          <Icon className='antd-icon' type="right" theme="outlined" />
        </AuthorsMore>
      </AuthorsWrapper >
    )
  }

  componentDidMount() {
    this.props.getAuthorsList(this.props.page)
  };
};

const mapState = (state) => ({
  list: state.getIn(['home', 'authorsList']),
  spin: state.getIn(['home', 'spin']),
  page: state.getIn(['home', 'authorsPage'])
});

const mapDispatch = (dispatch) => ({
  getAuthorsList(page) {
    dispatch(actionCreators.getAuthorsList(page));
  },
  handleSwitchClick(page) {
    dispatch(actionCreators.handleSwitchClick());
    if (page < 9) {
      dispatch(actionCreators.getAuthorsList(page + 1))
    } else {
      dispatch(actionCreators.getAuthorsList(0));
    }
  }
})

export default connect(mapState, mapDispatch)(Authors);