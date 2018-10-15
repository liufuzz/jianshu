import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from '../note/store';
import { NoteWrapper, NotePost, Article, Author, NoteContent } from './style';

class Note extends PureComponent {
  render() {
    console.log(this.props)
    const { list } = this.props;
    return (
      <NoteWrapper>
        <NotePost>
          <Article>
            <h1 className="title">{list.title}</h1>
          </Article>
          <Author>
            <span className="avatar">
              <img src={list.avatarImg} alt="" />
            </span>
            <div className="info">
              <span className="name">{list.name}</span>
              <span className="follow">
                <Icon type="plus" theme="outlined" />
                关注
              </span>
              <div className="meta">
                <span className="publish-time"> 2018.08.07 23:21</span>
                <span className="wordage"> 字数 1208</span>
                <span className="views-count"> 阅读 681</span>
                <span className="comments-count"> 评论 0</span>
                <span className="likes-count"> 喜欢 12</span>
              </div>
            </div>
          </Author>
          <img src={list.imgUrl} alt=""/>
          <NoteContent dangerouslySetInnerHTML={{__html: list.content}}></NoteContent>
        </NotePost>
      </NoteWrapper>
    )
  }

  componentDidMount() {
    this.props.getNoteList(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  list: state.getIn(['note', 'noteList'])
});

const mapDispatch = (dispatch) => ({
  getNoteList(id) {
    dispatch(actionCreators.getNoteList(id))
  }

})

export default connect(mapState, mapDispatch)(withRouter(Note));