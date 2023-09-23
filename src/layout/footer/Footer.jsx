import React from 'react';
import { FooterBottom } from './dist/FooterBottom';
import { FooterTop } from './dist/FooterTop';
import { Map } from './dist/Map';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid pt-5">
          <FooterTop />
        </div>
        <Map />
        <div className="container-fluid">
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};
