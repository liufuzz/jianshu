import styled from 'styled-components';
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 58px;
  min-height: 50px;
  margin-bottom: 20px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;
export const HeaderNav = styled.div`
  min-width: 768px;
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
`;
export const Logo = styled.div`
  float: left;
  height: 56px;
  display: block;
  width: 100px;
  background: url(${LogoPic});
  background-size: contain;
`;
export const Write = styled.div`
  float: right;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
`;
export const SignUp = styled.div`
  float: right;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
`;
export const Login = styled.div`
  float: right;
  margin: 11px 26px 0 10px;
  line-height: 40px;
  color: #969696;
  text-align: center;
  font-size: 15px;
`;
export const IconAa = styled.div`
  width: 50px;
  height: 40px;
  float: right;
  margin: 11px 6px 0 10px;
  text-align: center;
  line-height: 40px;
  color: #969696;
  font-size: 18px;
`;
export const Container = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Navbar = styled.ul`
  float: left;
  @media (max-width: 1081px) {
    input {
      width: 140px;
    }
    .icon {
      display: none;
    }
  };
  @media (max-width: 960px) {
    input {
      display: none;
    }
  };
`;
export const NavbarItem = styled.li`
  float: left;
  height: 56px;
  line-height: 26px;
  padding: 15px 15px 0 0;
  font-size: 18px;
  color: #333;
  margin-right: 10px;
  .antd-icon {
    margin-right: 6px;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .search-icon {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    font-size: 18px;
    color: #969696;
  };
  .focused-icon {
    background: #999;
    color: #fff;
  }
`;
export const Search = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  padding:0 35px 0 20px;
  box-sizing: border-box; 
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &.focused {
    width: 320px;
  };
  &.slide-enter {
    transition: all .3s ease-out
  };
  &.slide-enter-active {
    width: 320px;
  };
  &.slide-exit {
    transition: all .3s ease-out
  };
  &.slide-exit-active {
    width: 240px;
};
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 25px;
  width: 250px;
  font-size: 13px;
  margin-top: 11px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    left: 25px;
    bottom: 99%;
    border: 12px solid transparent;
    border-bottom-color: #fff;
  }
  &.hidden {
    display: none;
  }
`;
export const SearchInfoBox = styled.div`
  padding: 20px 20px 10px;
`;
export const SearchInfoTitle = styled.div`
  height: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  &:hover {
    color: #333;
  };
  .sync-icon {
    margin-right: 8px;
    font-size: 12px;
  };
  .spin-enter {
    transition: All 0.2s;
  };
  .spin-enter-active {
    transform: rotate(360deg);
  };
  .spin-exit {
    transition: All 0.2s;
  };
  .spin-exit-active {
    transform: rotate(360deg);
  };
`;
export const SearchInfoItem = styled.span`
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 15px 0;
  border: 1px solid #ddd;
  color: #787878;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    color: #333;
    border-color: #eee;
  };
`;