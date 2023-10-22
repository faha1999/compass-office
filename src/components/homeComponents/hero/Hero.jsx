import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import slider1 from '../../../assets/images/slider/slider1.png';
import slider2 from '../../../assets/images/slider/slider2.png';
import slider3 from '../../../assets/images/slider/slider3.png';

export const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper hero"
      >
        <SwiperSlide
          className="bg-image"
          style={{
            backgroundImage: `url(${slider1})`,
          }}
        >
          <div className="hero-text">
            <h1>Managed Print Services</h1>
            <p>
              Market leader of managed services provider of prints, documents,
              and process technology
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-image"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        >
          <div className="hero-text">
            <h1>Technology & Innovation</h1>
            <p>
              support organizations with expert consultancy, and technology
              solutions
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-image"
          style={{
            backgroundImage: `url(${slider3})`,
          }}
        >
          <div className="hero-text">
            <h1>Professional Service</h1>
            <p>keep your business moving with our service engineers</p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-image"
          style={{
            backgroundImage: `url(${slider1})`,
          }}
        >
          <div className="hero-text">
            <h1>Expertise Services</h1>
            <p>
              We specialize in every key sector to support you with the right
              solutions.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
