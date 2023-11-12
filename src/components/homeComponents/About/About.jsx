import React from 'react';
import { Link } from 'react-router-dom';
import aboutUs from '../../../assets/images/aboutUs.png';

export const About = () => {
  return (
    <>
      <div className="about pt-4 pb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 text-center pb-xs-5">
              <h2 className="pb-2">Compass Office</h2>
              <p className="pb-2">
                Having a rich 30-year history of achievements, Compass Office
                has solidified its position as one of the region's multifaceted
                business conglomerates. Collaborating with like-minded partners,
                the company actively pursues sustainable and lucrative
                investment prospects in both the private and public sectors.
                These endeavors not only deliver maximum value to stakeholders
                but also foster sustainable development in the communities where
                Compass Office conducts its operations.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>

            <div
              className="col-sm-12 col-md-4"
              style={{
                backgroundImage: `url(${aboutUs})`,
                borderRadius: '1rem',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="about-text text-center">
                <h1>About Us</h1>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 text-center pt-xs-5">
              <h2 className="pb-2">Compass Office</h2>
              <p className="pb-2">
                Compass Office operates within the framework of Compass Office,
                which has empowered us to embrace a distinctive strategy and
                harness the knowledge gained from this affiliation. As an
                autonomous provider of print, document, and process technology,
                Compass Office stands out through our multi-vendor print
                technology and service approach. We meticulously oversee our
                clients' operations to ensure maximum uptime and provide
                solutions that allow us to offer a unique array of services in
                the UAE.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
