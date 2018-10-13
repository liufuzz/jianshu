import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 15px 100px 15px;
`;
export const Container = styled.div`
  width: 960px;
  height: 500px;
  margin: 0 -15px 0 -15px;
`;
export const Main = styled.div`
  float: left;
  width: 640px;
  padding: 30px 0 0 15px;
`;
export const Aside = styled.div`
  float: left;
  width: 280px;
  padding: 30px 0 100px;
  margin-left: 40px;
`;

export const SliderWrapper = styled.div`
  margin-bottom: 30px;
  height: 0;
  padding-bottom: 43.2%;
  .ant-carousel .slick-slide {
  width: 625px;
  height: 270px;
  color: #fff;
  overflow: hidden;
  border-radius: 8px;
  };
  .ant-carousel .slick-dots {
    bottom: 15px;
  }
  .img {
    width: 100%
  }
`;

export const RecommendWrapper = styled.div`
  margin-bottom: 20px;
`;
export const RecommendItem = styled.span`
  display: inline-block;
  margin: 0 18px 18px 0;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  };
  span {
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
`;
export const RecommendMore = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: #787878;
  cursor: pointer;
  .antd-icon {
    font-size: 12px;
    margin-left: 3px;
  }
`;