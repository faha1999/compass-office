import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
// import { FiAirplay } from 'react-icons/fi';
import mpsChoice from '../../../assets/images/mps-choice.png';
import platinumColor from '../../../assets/images/platinumColor.png';

export const FooterMiddle = () => {
  return (
    <>
      <div className="FooterMiddle">
        <div className="container-fluid pt-4 pb-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={logo} alt="logo" loading="lazy" />

              <p className="pt-3">
                Welcome to Compass Office - Your Premier Managed Printing
                Service Provider in Dubai!
                <br /> <br />
                Established in the heart of Deira, Compass Office has solidified
                its position as a leading Managed Printing Service (MPS)
                provider in Dubai. With an unyielding commitment to exceptional
                service, we take pride in ensuring your printing needs are not
                just met, but exceeded.
              </p>

              <div className="row">
                <div className="col-6 mini-logo">
                  <img src={mpsChoice} alt="mpsChoice" loading="lazy" />
                </div>
                <div className="col-6 mini-logo">
                  <img src={platinumColor} alt="platinumColor" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 contactForm pt-xs-5 pt-sm-5 pt-md-0">
              <h1 className="text-white">EMAIL US</h1>

              <div className="form-floating mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Name"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="info@uae-copier.com"
                />
                <label htmlFor="floatingInputEmail">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Number"
                />
                <label htmlFor="floatingPassword">Number</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave your message here"
                  id="floatingTextarea2"
                  style={{ height: '100px' }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
              </div>

              <Link className="button mt-3">Send</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
