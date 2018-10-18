import styled from 'styled-components';

export const TopicWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 30px 0 50px;
  img {
    width: 100%;
  }
`;
export const Menu = styled.ul`
  margin: 30px 0 0 0;
  border-bottom: 1px solid #f0f0f0;
`;
export const MenuItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  color: #969696;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  cursor: pointer;
  margin-bottom: -1px;
  border-bottom: 0px solid #646464;
  &:hover {
    color: #646464;
  }
  .antd-icon {
    margin-right: 5px;
    font-size: 17px;
  }
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 100%;
    opacity: 0;
    border-bottom: 2px solid #646464;
    transform: translate(-50%) scaleX(0);
    transition: .2s ease-in-out;
  };
  &:hover::after {
    opacity: 1;
    transform: translate(-50%) scaleX(1);
    transition: .2s ease-in-out;
  }
  &.active {
    color: #646464;
    border-bottom: 2px solid #646464;
  }
`;
export const TopicRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
export const TopicCol = styled.div`
  text-align: center;
  width: 300px;
  margin: 0 15px;
`;
export const TopicColWrap = styled.div`
  height: 280px;
  margin-top: 80px;
  padding: 0 20px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: hsla(0,0%,71%,.1);
  &:hover {
    box-shadow: 0 5px 20px rgba(0,0,0,.1);
  }
  .avatar {
    width: 80px;
    height: 80px;
    margin: -40px 0 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
  }
  .name {
    font-size: 21px;
    font-weight: 700;
    margin: 10px 0;
  }
  .desc {
    font-size: 13px;
    line-height: 25px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
  }
`;
export const Follow = styled.div`
  width: 100px;
  padding: 8px 0;
  margin: 20px auto;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  border-radius: 40px;
  color: #fff;
  background-color: #42c02e;
`;
export const Count = styled.div`
  font-size: 14px;
`;
