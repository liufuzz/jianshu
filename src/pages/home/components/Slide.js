import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { SliderWrapper } from '../style';

class Slide extends PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      pauseOnHover: true
    }
    return (
      <SliderWrapper>
        <Carousel {...settings}>
          {
            this.props.list.map((item) => {
              return <div key={item.id}><img className='img' src={item.imgUrl} alt="" /></div>
            })
          }
        </Carousel>
      </SliderWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'slideList'])
});

export default connect(mapState, null)(Slide);