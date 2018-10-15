import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Slide from './components/Slide';
import Recommend from './components/Recommend';
import NotoList from './components/NotoList';
import Board from './components/Board';
import Download from './components/Download';
import Authors from './components/Authors';
import { BackTop } from 'antd';
import { HomeWrapper, Container, Main, Aside } from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <Container>
          <Main>
            <Slide></Slide>
            <Recommend></Recommend>
            <NotoList></NotoList>
          </Main>
          <Aside>
            <Board></Board>
            <Download></Download>
            <Authors></Authors>
          </Aside>
        </Container>
        <BackTop></BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData()
  };
};

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.getHomeData())
  }
});

export default connect(mapState, mapDispatch)(Home);