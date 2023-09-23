import React from 'react';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const FooterTop = () => {
  return (
    <>
      <div className="row FooterTop pt-5">
        <div className="col-6 gap-3">
          <h1 className="text-center pb-3">CONTACT US</h1>

          <div className="d-flex justify-content-between">
            <div className="col-6 d-flex contactInfo">
              <MdLocationPin />

              <p>Address: 209, Makeen Building, Airport Road, Dubai</p>
            </div>

            <div className="col-6 contactInfo">
              <div className="d-flex">
                <BsFillTelephoneFill />

                <p>
                  Phone: <a href="tel:+000123456789">+000 1 2345 6789</a>
                </p>
              </div>

              <div className="d-flex">
                <FaFax />

                <p>Fax: +000 1 2345 6789</p>
              </div>

              <div className="d-flex">
                <MdEmail />

                <p>
                  Email:{' '}
                  <a href="mailto:info@uae-copier.com">info@uae-copier.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <h1 className="text-center pb-3">CONTACT US</h1>

          <div className="d-flex justify-content-center gap-5 socialIcons">
            <div>
              <Link>
                <AiOutlineTwitter />
              </Link>
            </div>
            <div>
              <Link>
                <BiLogoFacebook />
              </Link>
            </div>
            <div>
              <Link>
                <BiLogoLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
