import React from 'react';
import { Link } from 'react-router-dom';
import aboutUs from '../../assets/images/aboutUs.png';

export const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img className="w-100" src={aboutUs} alt="About" loading="lazy" />

            <div className="content position-absolute">
              <h1 className="text-white">Who We Are</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <h1 className="text-center pt-5 pb-5">About Us</h1>

          <div className="row">
            <div className="col-sm-12 col-md-4 text-center pb-5">
              <h2>Compass Office</h2>

              <p className="pt-3 pb-3">
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
            <div className="col-sm-12 col-md-4 pb-5 AboutUsImg">
              <img
                src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="About"
                loading="lazy"
              />
            </div>
            <div className="col-sm-12 col-md-4 text-center pb-5">
              <h2>Compass Office</h2>

              <p className="pt-3 pb-3">
                Welcome to Compass Office, your premier destination for top-tier
                imaging supplies and solutions, strategically headquartered in
                Dubai, UAE. Our mission is to redefine the standards of printing
                and copying solutions across the Middle East and African
                markets, offering unparalleled quality and efficiency.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
