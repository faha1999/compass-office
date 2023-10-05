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
      <div className="row FooterTop pt-5 pb-5">
        <div className="pb-4 col-xs-12 col-sm-12 col-md-6 gap-3">
          <h1 className="text-center pb-3">CONTACT US</h1>
          <div className="row">
            <div className="flex-sm-column d-md-flex flex-md-row justify-content-between">
              <div className="col-sm-12 col-md-6 d-flex contactInfo">
                <MdLocationPin />

                <p>
                  Address: UAE Copier 36, 7 states buiding, Deira , Dubai, UAE,
                  <br />
                  P.O box: 380750
                </p>
              </div>

              <div className="col-sm-12 col-md-6 contactInfo">
                <div className="d-flex">
                  <BsFillTelephoneFill />

                  <p>
                    Phone: <a href="tel:+971501726313">+971 50 172 6313</a>
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
                    <a href="mailto:info@uaecopier.ae">info@uaecopier.ae</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 col-xs-12 col-sm-12 col-md-6">
          <h1 className="text-center pb-3">FOLLOW US</h1>

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
