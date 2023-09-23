import React from 'react';
import { FooterBottom } from './dist/FooterBottom';
import { FooterTop } from './dist/FooterTop';
import { Map } from './dist/Map';
import { FooterMiddle } from './dist/FooterMiddle';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid pt-5">
          <FooterTop />
        </div>
        <Map />
        <FooterMiddle />
        <div className="container-fluid">
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};
