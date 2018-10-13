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
  width: 66.66667%;
  padding: 15px 0 0 15px;
`;
export const Aside = styled.div`
  float: left;
  width: 29.16667%;
  padding: 15px 0 100px;
  margin-left: 4.16667%;
`;

export const SliderWrapper = styled.div`
  margin-bottom: 30px;
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