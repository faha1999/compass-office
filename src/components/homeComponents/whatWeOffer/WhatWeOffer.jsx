import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../../assets/images/Products.webp';
import Technology from '../../../assets/images/Technology.webp';
import Service from '../../../assets/images/Service.webp';
import expertise from '../../../assets/images/expertise.webp';

export const WhatWeOffer = () => {
  return (
    <>
      <div className="WhatWeOffer pt-5 pb-5">
        <h1 className="text-center pb-3">What We Offer</h1>

        <hr className="hr" />

        <div className="container-fluid mt-5 pt-3">
          <div className="row">
            <div className="col-sm-12 col-md-6 WhatWeOffer-content">
              <Link className="pb-3 headLine">Products</Link>

              <p>
                Compass Office holds a top position in Managed Services and
                Digital Document Services, merging industry knowledge with.....
                <Link className="readMore">Read More</Link>
              </p>

              <img src={products} alt="products" loading="lazy" />
            </div>

            <div className="col-sm-12 col-md-6 WhatWeOffer-content pt-xs-5">
              <Link className="pb-3 headLine">Technology</Link>

              <p>
                Our technology lies in Compass Office's ability to select from
                top-tier brands in the print, copy, and scan sector. Coupled
                with our proficiency in on-site device.....
                <Link className="readMore">Read More</Link>
              </p>

              <img src={Technology} alt="TECHNOLOGIES" loading="lazy" />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 WhatWeOffer-content pt-xs-5">
              <Link className="pb-3 headLine">Services</Link>

              <p>
                Compass Office holds a dominant position in the field of Managed
                Services and Digital Document Services, uniting industry
                knowledge with..... <Link className="readMore">Read More</Link>
              </p>

              <img src={Service} alt="TECHNOLOGIES" loading="lazy" />
            </div>

            <div className="col-sm-12 col-md-6 WhatWeOffer-content pt-xs-5">
              <Link className="pb-3 headLine">Expertise</Link>

              <p>
                With over three decades of expertise, operating under the UAE
                Copier, Compass Office has become the leading managed service
                provider..... <Link className="readMore">Read More</Link>
              </p>

              <img src={expertise} alt="TECHNOLOGIES" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
