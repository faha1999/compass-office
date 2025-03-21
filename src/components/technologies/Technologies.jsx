import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import ourTechnology from '../../assets/images/slider/slider2.jpeg';

export const Technologies = () => {
  return (
    <>
      <Meta title={'Our Technologies'} />

      <div className="technologies">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src={ourTechnology}
              alt="About"
              loading="lazy"
            />

            <div className="content position-absolute">
              <h1 className="text-white">
                High-End Advanced <br /> Printing Technology
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <CurrentLocation title="Technologies" />

          <h1 className="text-center pt-5 pb-5">TECHNOLOGY</h1>
          <p className="pb-5" style={{ textAlign: 'justify' }}>
            Our autonomy at Compass Office, along with the freedom to select
            from the industry's finest brands in printing, copying, and
            scanning, in combination with our adeptness in supporting and
            upkeeping devices at client locations across the UAE, confirms our
            suitability as the preferred company to offer top-notch hardware and
            software solutions tailored to your needs. As a provider of multiple
            brands, we are well-positioned to provide cutting-edge products and
            design document workflow solutions for our clients. We assist our
            clients in enhancing efficiency and productivity, cutting costs,
            minimizing errors and waste, and fortifying secure business
            practices.
          </p>
        </div>
      </div>
    </>
  );
};
