import styled from 'styled-components';

export const NoteWrapper = styled.div`
  position: relative;
  padding-top: 10px;
`;
export const NotePost = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px;
`;
export const Article = styled.div`
  .title {
    margin-top: 20px;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }
`;
export const Author = styled.div`
  margin: 30px 0 40px;
  .avatar {
    width: 48px;
    height: 48px;
    vertical-align: middle;
    display: inline-block;
  }
  img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .info {
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
    .name {
      margin-right: 3px;
      font-size: 16px;
      vertical-align: middle;
    }
  }
  .follow {
    margin-left: 5px;
    padding: 0 7px 0 5px;
    font-size: 12px;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    border-color: #42c02e;
    text-align: center;
    vertical-align: middle;
  }
  .meta {
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
    span {
      padding-right: 5px;
    }
  }
`;
export const NoteContent = styled.div`
  color: #2f2f2f;
  font-weight: 400;
  line-height: 1.7;
`;
