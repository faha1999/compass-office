import React from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Outlet } from 'react-router-dom';
import { Whatsapp } from './Whatsapp';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Whatsapp />
      <Footer />
    </>
  );
};
