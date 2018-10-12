import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper, HeaderNav, Logo, Write, SignUp, Login, IconAa, Container, Navbar, NavbarItem, SearchWrapper,
  Search, SearchInfo, SearchInfoBox, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from './style';

class Header extends PureComponent {

  render() {
    const {
      focused, mouseIn, spin, list, page, handleInputFocus, handleInputBlur,
      handleMouseEnter, handleMouseLeave, handleSwitchClick
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    const totalPage = Math.ceil(newList.length / 10)
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
      }
    }
    return (
      <HeaderWrapper>
        <HeaderNav>
          <Link to='/'>
            <Logo />
          </Link>
          <Write>
            <Icon type='edit'></Icon>
            写文章
          </Write>
          <SignUp>注册</SignUp>
          <Login>登录</Login>
          <IconAa>
            <Icon type='font-colors' />
          </IconAa>
          <Container>
            <Navbar>
              <Link to='/'>
                <NavbarItem className='active'>
                  <Icon className='antd-icon icon' type='compass' />
                  首页
                </NavbarItem>
              </Link>
              <NavbarItem>
                <Icon className='antd-icon icon' type='shake' />
                下载App
              </NavbarItem>
              <SearchWrapper>
                <CSSTransition
                  in={focused}
                  timeout={300}
                  classNames='slide'
                >
                  <Search
                    className={focused ? 'focused' : ''}
                    onFocus={() => handleInputFocus(list)}
                    onBlur={handleInputBlur}
                  ></Search>
                </CSSTransition>
                <Icon className={focused ? 'focused-icon search-icon' : 'search-icon'} type="search" theme="outlined" />
                <SearchInfo
                  className={focused || mouseIn ? '' : 'hidden'}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <SearchInfoBox>
                    <SearchInfoTitle>
                      热门搜索
                      <SearchInfoSwitch
                        onClick={() => handleSwitchClick(page, totalPage)}
                      >
                        <CSSTransition
                          in={spin}
                          timeout={200}
                          classNames='spin'
                        >
                          <Icon className='sync-icon' type='sync' theme='outlined' />
                        </CSSTransition>
                        换一批
                      </SearchInfoSwitch>
                    </SearchInfoTitle>
                    {pageList}
                  </SearchInfoBox>
                </SearchInfo>
              </SearchWrapper>
            </Navbar>
          </Container>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

const mapState = (state) => ({
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  spin: state.getIn(['header', 'spin'])

});

const mapDispatch = (dispatch) => ({
  handleInputFocus(list) {
    dispatch(actionCreators.handleInputFocus())
    if (list.size === 0) {
      dispatch(actionCreators.getHeaderList())
    }
  },
  handleInputBlur() {
    dispatch(actionCreators.handleInputBlur())
  },
  handleMouseEnter() {
    dispatch(actionCreators.handleMouseEnter())
  },
  handleMouseLeave() {
    dispatch(actionCreators.handleMouseLeave())
  },
  handleSwitchClick(page, totalPage) {
    if (page < totalPage) {
      dispatch(actionCreators.handleSwitchClick((page + 1)))
    } else {
      dispatch(actionCreators.handleSwitchClick(1))
    }
  }
})

export default connect(mapState, mapDispatch)(Header);