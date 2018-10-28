import React, { PureComponent } from 'react';
import { Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { LoginWrap, Mian, Title, InputItem } from './style';

class Login extends PureComponent {
  render() {
    const { loginStatus, handleBtnClick } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrap>
          <Mian>
            <Title>
              <span>登录</span>
            </Title>
            <InputItem>
              <input
                type="text"
                placeholder="username"
                ref={input => {
                  this.account = input;
                }}
              />
              <Icon className="antd-icon" type="contacts" theme="filled" />
            </InputItem>
            <InputItem>
              <input
                type="password"
                placeholder="password"
                ref={input => {
                  this.password = input;
                }}
              />
              <Icon className="antd-icon" type="lock" theme="filled" />
            </InputItem>
            <Button
              className="btn"
              type="primary"
              block
              onClick={() => handleBtnClick(this.account, this.password)}
            >
              登录
            </Button>
          </Mian>
        </LoginWrap>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = dispatch => ({
  handleBtnClick(account, password) {
    dispatch(actionCreators.login(account.value, password.value));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Login);
