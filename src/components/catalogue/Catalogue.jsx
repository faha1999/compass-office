import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import catalogue from '../../assets/excel/E-catalog_SINO+PRINT-2023+Dec.xlsx';

export const Catalogue = () => {
  return (
    <>
      <div className="container-fluid">
        <Meta title={'Our Catalogue'} />
        <CurrentLocation title="Our Catalogue" />

        <h5 className="text-center pt-5 pb-5">
          Download our product catalogue{' '}
          <a className="fw-bolder" href={catalogue} download={true}>
            here.
          </a>
        </h5>
      </div>
    </>
  );
};
