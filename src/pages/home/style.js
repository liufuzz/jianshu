import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 15px 100px 15px;
  .ant-back-top {
    transform: translateZ(0);
  }
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

// Slide样式
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

// Recommend样式
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

// NotoList样式
export const ListWrapper = styled.div`
  border-top: 1px solid #dcdcdc;
`;
export const ListContainer = styled.ul`
  /* border-top: 1px solid #dcdcdc; */
`;
export const ListItem = styled.li`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 5px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const ListMeta = styled.div`
  font-weight: 400;
  line-height: 20px;
  margin-top: 8px;
  font-size: 12px;
`;
export const ListMetaItem = styled.span`
  margin-right: 10px;
  color: #a5a5a5;
  .antd-icon {
    margin-right: 3px;
    font-style: normal;
    font-weight: 400;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border-radius: 20px;
  background: #a5a5a5;
  font-size: 15px;
`;


// Board样式
export const BoardWrappper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`;
export const BoardItem = styled.div`
  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 4px;
    border-radius: 4px;
  }
`;

// Download 样式
export const DownloadWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 10px 22px;
  margin-bottom: 30px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 6px;
  img {
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
  };
  &:hover {
    .fade {
      display: inline-block;
    }
  }
`;
export const DownloadInfo = styled.div`
  display: inline-block;
  margin-left: 7px;
  vertical-align: middle;
`;
export const DownloadInfoTitle = styled.div`
  font-size: 15px;
  color: rgb(51, 51, 51);
  .antd-icon {
    font-size: 13px;
    margin-left: 5px;
  }
`;
export const DownloadInfoDesc = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: rgb(153, 153, 153);
`;

export const DownloadFade = styled.div`
  display: none;
  position: absolute;
  right: 50px;
  bottom: 92px;
  padding: 10px;
  background: #fff;
  border: 1px solid #dcdcdc;;
  border-radius: 5px;
  box-shadow: 0 5px 5px #f0f0f0;
  img {
    display: inline-block;
    width: 160px;
    height: 160px;
  };
  &::after {
    content: "";
    position: absolute;
    left: 80px;
    top: 99%;
    border: 12px solid transparent;
    border-top-color: #fff;
  }
`;

// Authors样式
export const AuthorsWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  .antd-icon {
    margin-left: 5px;
    font-size: 13px;
  }
`;
export const AuthorsTitle = styled.div`
  text-align: left;
  font-size: 14px;
  color: #969696;
  .page-change {
    display: block;
    float: right;
    cursor: pointer;
    .sync-icon {
    margin-right: 5px;
    font-size: 12px;
    }
  };
  .spin-enter {
    transition: all .2s;
  };
  .spin-enter-active {
    transform: rotate(360deg);
  };
  .spin-exit {
    transition: all .2s;
  };
  .spin-exit-active {
    transform: rotate(360deg);
  }
`;
export const AuthorsList = styled.ul`
  margin-bottom: 20px;
  text-align: left;
`;
export const AuthorsItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  .avatar {
    float: left;
    margin-right: 10px;
  }
  .follow {
    float: right;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #42c02e;
  }
  .name {
    display: block;
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;
export const AuthorsMore = styled.span`
  position: absolute;
  padding: 7px 7px 7px 12px;
  left: 0;
  width: 100%;
  font-size: 13px;
  color: #787878;
  cursor: pointer;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .antd-icon {
    margin-left: 5px;
    font-size: 13px;
  }
`;