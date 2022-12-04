import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { bannersMock } from '../../api/mockups/index'
import banner1 from '../../../public/banner.svg';
import banner2 from '../../../public/banner2.svg';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const LoopContainer = styled.div`
  width: 300px;
  aling-items: center;
  margin: 24px 0;

  .swiper {
      width: 100%;
      height: 100%;
  }

  .swiper-slide {
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .swiper-pagination {
      bottom: 0px !important;

      .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
      }

      .swiper-pagination-bullet-active {
          width: 20px !important;
          height: 5px !important;
          border-radius: 20px;
          background-color: #f7af35;
      }
  }

  ${breakpoint('tablet')`
    width: 600px;
  `}

  ${breakpoint('desktop')`
    width: 900px;
  `}
`
const ImageBox = styled.div`
  aling-items: center;
  padding: 8px;

  ${breakpoint('tablet')`
    padding: 16px;
  `}

  ${breakpoint('desktop')`
    padding: 24px;
  `}
`

const TextSpacing = styled.p`
  display: flex;
  justify-content: center;
  margin: 60px 0 24px;
  color: #b7b7b7;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
`

const ImageTest = styled.div`
  width: 100%;

  ${breakpoint('desktop')`
    width: 500px;
  `}
`

export default function TechnologyContent() {
  const bannerImage = {
    1: banner1,
    2: banner2,
    3: banner1,
  };

  return (
  <LoopContainer>
    <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        speed={800}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
    >
    {
        bannersMock.banners.map(({id, image, title}) => (
          <SwiperSlide key={id}>
          <ImageBox>
            <ImageTest >
              <Image src={bannerImage[image]} />
            </ImageTest>
            <TextSpacing>{title}</TextSpacing>
          </ImageBox>
        </SwiperSlide>
        ))
      }
    </Swiper>
  </LoopContainer>
  )
}
