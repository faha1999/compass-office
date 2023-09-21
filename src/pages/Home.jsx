import React from 'react';
import { Hero } from '../components/homeComponents/hero/Hero';
import { About } from '../components/homeComponents/About/About';
import { Wrapper } from '../components/homeComponents/wrapper/Wrapper';
import { WhyUs } from '../components/homeComponents/whyUs/WhyUs';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Wrapper />
      <WhyUs />
    </>
  );
};
