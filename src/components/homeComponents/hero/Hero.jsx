import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

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
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1682145866460-aaa6fd2d7663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpbnRpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60)',
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
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1664297816584-07eb4e3f2814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50JTIwdGVjaG5vbG9neXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)',
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
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1682145459096-2f7f9aca3ba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJvZmVzc2lvbmFsJTIwcHJpbnQlMjBTZXJ2aWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)',
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
            backgroundImage:
              'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXhwZXJ0aXNlJTIwYnVzaW5lc3MlMjBTZXJ2aWNlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)',
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
