import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import product1 from '../../assets/images/products/Canon 2.webp';
import product2 from '../../assets/images/products/Canon-1.webp';
import product3 from '../../assets/images/products/Canon.webp';
import product4 from '../../assets/images/products/KM-1.webp';
import product5 from '../../assets/images/products/KM-2.webp';
import product6 from '../../assets/images/products/KM.webp';
import product7 from '../../assets/images/products/京瓷 .webp';
import product8 from '../../assets/images/products/京瓷 1.webp';
import product9 from '../../assets/images/products/京瓷-加大量 .webp';

export const TopProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <Meta title={'Top Products'} />
        <CurrentLocation title="Top Products" />

        <div className="row">
          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product1} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product2} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product3} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product4} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product5} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product6} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product7} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product8} alt="product1" />
          </div>

          <div className="col-sm-12 col-md-4 pb-5">
            <img src={product9} alt="product1" />
          </div>
        </div>
      </div>
    </>
  );
};
