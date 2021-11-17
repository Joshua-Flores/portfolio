import React from 'react';
import StyledSkewedSection from './skewed-section';
import styled from '@emotion/styled';
import { StyledH1 } from './_shared/styled-headings';
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module

const SlideContent = styled.div`
  margin: auto;
  padding: 0px 0px 24px 0px;
`;

const creativeProcess = () => {
  return (
    <StyledSkewedSection angle={10}>
      <StyledH1>My Creative Process</StyledH1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideContent>
            <h3>Step 1 - Research</h3>
            <p>
              {
                "Good designers don't talk, they ask questions and listen. During this phase I'm like a detective - speaking to everyone from users to stakeholders to find out everything necessary for a well-informed design."
              }
            </p>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <h3>Step 2 - Design</h3>
            <p>
              {
                "The design phase is where I translate what I've learned into flows and eventually mockups of the actual product. The designs at this point aren't meant to be perfect - they're meant to be conversation starters."
              }
            </p>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <h3>Step 3 - Build</h3>
            <p>
              {
                'This is where I put it all together - either creating the product myself or writing user stories for engineering to deliver. I like to focus on delivering work in small chunks and soliciting feedback until the stakeholder is ready to go live. '
              }
            </p>
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <h3>...and repeat</h3>
            <p>
              {
                "Development doesn't stop once a product goes out. After a product is launched the work begins of monitoring user behavior and soliciting feedback. These learnings are then incorporated into the beginning of another iterative design cycle. "
              }
            </p>
          </SlideContent>
        </SwiperSlide>
      </Swiper>
    </StyledSkewedSection>
  );
};

export default creativeProcess;
