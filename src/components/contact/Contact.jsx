import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { BiSolidMapAlt } from 'react-icons/bi';
import { MdConnectWithoutContact } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

export const Contact = () => {
  return (
    <>
      <Meta title={'About us'} />
      <CurrentLocation title="Contact" />

      <div className="contact">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://plus.unsplash.com/premium_photo-1682309667112-971fb0622b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbnRhY3R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="contact"
            />

            <div className="content position-absolute">
              <h1>Get In Touch</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid contactDetails pt-5">
          <div className="row">
            <h1 className="text-center">Connect With Us</h1>

            <div className="col-4 text-center">
              <BiSolidMapAlt />

              <h2 className="fw-bold pt-3 pb-3">We Are Here</h2>

              <p>209, Makeen Building, Airport Road, Dubai</p>
            </div>

            <div className="col-4 text-center">
              <MdConnectWithoutContact />
              <h2 className="fw-bold pt-3 pb-3">Contact Us</h2>
              <p>
                Phone: <a href="tel:+000123456789">+000 1 2345 6789</a>
              </p>
              <p>
                Phone: <a href="tel:+000123456789">+000 1 2345 6789</a>
              </p>

              <p>
                <a href="mailto:info@uae-copier.com">info@uae-copier.com</a>
              </p>

              <p>
                <a href="mailto:info@uae-copier.com">info@uae-copier.com</a>
              </p>

              <p>
                <a href="mailto:info@uae-copier.com">info@uae-copier.com</a>
              </p>
            </div>

            <div className="col-4 text-center">
              <BsFillCalendarWeekFill />

              <h2 className="fw-bold pt-3 pb-3">Working Hours</h2>

              <p>Monday-Friday: 8:30 am – 5:30 pm</p>
              <p>Saturday-Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
