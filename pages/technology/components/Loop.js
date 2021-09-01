import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';


const LoopContainer = styled.div`
  width: 300px;
  aling-items: center;
  margin: 24px 0;

  ${breakpoint('tablet')`
    width: 600px;
  `}

  ${breakpoint('desktop')`
    width: 900px;
  `}
`

const ImageBox = styled.div`
  aling-items: center;
  height: 200px;
  padding: 8px;
  margin: auto;

  ${breakpoint('tablet')`
    padding: 16px;
  `}

  ${breakpoint('desktop')`
    padding: 24px;
  `}

  slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
  h3{
    opacity: 0.8;
    transition: all 300ms ease;
  }
`

const ImageTest = styled.div`
  height: 100vh;
  width: 100%;
  background: #1d1e1c;
`

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <LoopContainer>
        <Slider {...settings}>
          <ImageBox>
            <ImageTest />
          </ImageBox>
          <ImageBox>
            <ImageTest />
          </ImageBox>
          <ImageBox>
            <ImageTest />
          </ImageBox>
          <ImageBox>
            <ImageTest />
          </ImageBox>
          <ImageBox>
            <ImageTest />
          </ImageBox>
          <ImageBox>
            <ImageTest />
          </ImageBox>
        </Slider>
      </LoopContainer>
    );
  }
}