import React from 'react';
import { Hero } from '../components/homeComponents/hero/Hero';
import { About } from '../components/homeComponents/About/About';
import { Wrapper } from '../components/homeComponents/wrapper/Wrapper';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Wrapper />
    </>
  );
};
