import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

export const FooterBottom = () => {
  return (
    <>
      <div className="row FooterBottom pb-4 pt-4">
        <div className="col-sm-12 col-md-4">
          <p className="mb-0 text-sm-center">
            &copy; <strong>compassoffice</strong> 1986 -{' '}
            {new Date().getFullYear()} All write reserved
          </p>

          <h6 className="pt-3">Useful Links</h6>
          <a href="https://www.sinopscm.com/">sinopscm</a>
        </div>

        <div className="col-sm-12 col-md-4 pb-sm-4 pt-sm-4">
          <div className="text-center">
            <Link className="me-3">Support</Link>
            <Link className="me-3">Contact</Link>
            <Link className="me-3">Disclaimer</Link>
            <Link>Terms</Link>
          </div>
        </div>

        <div className="col-sm-12 col-md-4">
          <div className="text-xs-center text-sm-center text-md-end">
            <Link className="me-3">
              <AiOutlineTwitter />
            </Link>
            <Link className="me-3">
              <BiLogoFacebook />
            </Link>
            <Link className="me-3">
              <BiLogoLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
