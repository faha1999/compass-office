import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

export const FooterBottom = () => {
  return (
    <>
      <div className="row FooterBottom pb-4 pt-4">
        <div className="col-sm-12 col-md-4">
          <p className="mb-0 text-white">
            &copy; <strong>uaecopier</strong> {new Date().getFullYear()} All
            write reserved
          </p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <div className="text-center">
            <Link className="me-3">Support</Link>
            <Link className="me-3">Contact</Link>
            <Link className="me-3">Disclaimer</Link>
            <Link>Terms</Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="text-end">
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
