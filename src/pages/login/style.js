import styled from 'styled-components';

export const LoginWrap = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 58px;
  text-align: center;
  background: #f1f1f1;
`;

export const Mian = styled.div`
  width: 400px;
  margin: 180px auto;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  .btn {
    margin-top: 30px;
    border-radius: 25px;
    padding: 10px 20px;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  margin: 0 auto 50px;
  span {
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`;
export const InputItem = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    height: 50px;
    margin-bottom: 0px;
    background-color: rgba(181, 181, 181, 0.1);
    vertical-align: middle;
    padding: 4px 12px 4px 35px;
    border: 1px solid rgb(200, 200, 200);
    border-image: initial;
    border-radius: 0px 0px 4px 4px;
    &:focus {
      outline: none;
    }
  }

  .antd-icon {
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: rgb(150, 150, 150);
  }
`;
