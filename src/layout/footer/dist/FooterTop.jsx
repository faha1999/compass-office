import React from 'react';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

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
                  Address: Office:117, SAEED BIN THANI BUILDING, Naif, Dubai,
                  United Arab Emirates
                  <br />
                  P.O box: 380750
                </p>
              </div>

              <div className="col-sm-12 col-md-6 d-flex contactInfo">
                <MdLocationPin />

                <p>
                  Sharjah branch: Mariam Alsheikh Mohammad bin Ahmad, Al
                  Khazraji building - Al Zhara'a St - next to Emirates Post
                  Sharjah Central Post Office - Al Soor - Sharjah
                </p>
              </div>

              <div className="col-sm-12 col-md-6 contactInfo">
                <div className="d-flex">
                  <BsFillTelephoneFill />

                  <p>
                    Phone: <a href="tel:+971547230998">+971 54 723 0998</a>
                  </p>
                </div>

                <div className="d-flex">
                  <MdEmail />

                  <p>
                    Email:{' '}
                    <a href="mailto:info@compassoffice.ae">
                      info@compassoffice.ae
                    </a>
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

        {/* <div className="pb-4 col-xs-12 col-sm-12 col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Ben T.C.</h5>
              <p class="card-text">Founder</p>
              <div className="d-flex">
                <MdEmail />

                <p>
                  Email:{' '}
                  <a href="mailto:ben@sp-copier.com">ben@sp-copier.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 col-xs-12 col-sm-12 col-md-6">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Akib Irfan</h5>
              <p class="card-text">General Manager, Middle East Branch</p>
              <div className="d-flex">
                <MdEmail />

                <p>
                  Email:{' '}
                  <a href="mailto:akib.irfan@sp-copier.com">
                    akib.irfan@sp-copier.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
