import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BoardWrappper, BoardItem } from '../style';

class Board extends PureComponent {
  render() {
    return (
      <BoardWrappper>
        {this.props.list.map(item => {
          return (
            <BoardItem key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
            </BoardItem>
          );
        })}
      </BoardWrappper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'boardList'])
});

export default connect(
  mapState,
  null
)(Board);
