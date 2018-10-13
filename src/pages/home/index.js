import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Slide from './components/Slide';
import { HomeWrapper, Container, Main, Aside } from './style';

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <Container>
          <Main>
            <Slide></Slide>
          </Main>
          <Aside>aside</Aside>
        </Container>
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