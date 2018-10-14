import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ListWrapper, ListContainer, ListItem, ListInfo, ListMeta, ListMetaItem, LoadMore } from '../style';

class NotoList extends PureComponent {
  render() {
    const { list, page, getMoreData } = this.props;
    return (
      <ListWrapper>
        <ListContainer>
          {
            list.map((item, index) => {
              return (
                <ListItem key={index}>
                  <img className='pic' src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
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
});

const mapDispatch = (dispatch) => ({
  getMoreData(page) {
    dispatch(actionCreators.getMoreData(page))
  }
})

export default connect(mapState, mapDispatch)(NotoList);