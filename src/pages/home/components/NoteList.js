import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ListWrapper, ListContainer, ListItem, ListInfo, ListMeta, ListMetaItem, LoadMore } from '../style';

class NoteList extends PureComponent {

  render() {
    const { list, page, getMoreData } = this.props;
    return (
      <ListWrapper>
        <ListContainer>
          {
            list.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Link to={'/note/' + item.get('id')}>
                    <img className='pic' src={item.get('imgUrl')} alt="" />
                  </Link>
                  <ListInfo>
                    <Link to={'/note/' + item.get('id')}>
                      <h3 className="title">{item.get('title')}</h3>
                    </Link>
                    <p className="desc">{item.get('desc')}</p>
                    <ListMeta>
                      <ListMetaItem>
                        {item.get('name')}
                      </ListMetaItem>
                      <ListMetaItem>
                        <Icon className='antd-icon' type="message" theme="filled" />
                        {item.get('blank')}
                      </ListMetaItem>
                      <ListMetaItem>
                        <Icon className='antd-icon' type="heart" theme="filled" />
                        {item.get('like')}
                      </ListMetaItem>
                    </ListMeta>
                  </ListInfo>
                </ListItem>
              )
            })
          }
          <LoadMore onClick={() => getMoreData(page)}>阅读更多</LoadMore>
        </ListContainer>
      </ListWrapper>
    )
  }
};

const mapState = (state) => ({
  list: state.getIn(['home', 'noteList']),
  page: state.getIn(['home', 'noteListPage']),
  loading: state.getIn(['home', 'loading'])
});

const mapDispatch = (dispatch) => ({
  getMoreData(page) {
    dispatch(actionCreators.getMoreData(page))
  }
})

export default connect(mapState, mapDispatch)(NoteList);