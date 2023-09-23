import React from 'react';
import { FooterBottom } from './dist/FooterBottom';
import { FooterTop } from './dist/FooterTop';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid pt-5">
          <FooterTop />
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};
