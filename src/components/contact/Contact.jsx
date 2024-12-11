import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { BiSolidMapAlt } from 'react-icons/bi';
import { MdConnectWithoutContact } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://plus.unsplash.com/premium_photo-1682309667112-971fb0622b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbnRhY3R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="contact"
              loading="lazy"
            />

            <div className="content position-absolute">
              <h1>Get In Touch</h1>
            </div>
          </div>
        </div>

        <Meta title={'About us'} />
        <CurrentLocation title="Contact" />

        <div className="container-fluid contactDetails pt-5">
          <div className="row">
            <div className="col-12 contactInfo">
              <h5 className="pt-3 fw-bold">Get In Touch</h5>

              <p className="pt-1">
                Whether you are looking to optimize your printing environment,
                reduce costs, or simply seeking expert advice, Compass Office is
                here for you. Contact us today and experience unparalleled
                service. <br />
                <br /> At Compass Office, we believe in forging long-lasting
                relationships. Let’s embark on this journey together.
              </p>
              <p className="pt-1">
                <strong></strong>
              </p>
            </div>
          </div>

          <div className="row">
            <h1 className="text-center pb-5">Connect With Us</h1>

            <div className="pb-4 col-xs-12 col-sm-12 col-md-4 text-center">
              <BiSolidMapAlt />

              <h2 className="fw-bold pt-3 pb-3">We Are Here</h2>

              <p>
                Compass Office 36, 7 states buiding, Deira , Dubai, UAE, P.O
                box: 380750
              </p>
            </div>

            <div className="pb-4 col-xs-12 col-sm-12 col-md-4 text-center">
              <MdConnectWithoutContact />
              <h2 className="fw-bold pt-3 pb-3">Contact Us</h2>
              <p>
                Phone: <a href="tel:+971501726313">+971 50 172 6313</a>
              </p>
              <p>
                Phone: <a href="tel:+971501726313">+971 54 723 0998</a>
              </p>

              <p>
                <a href="mailto:info@compassoffice.ae">info@compassoffice.ae</a>
              </p>
              {/*
              <p>
                <a href="mailto:info@compassoffice.ae">info@compassoffice.ae</a>
              </p>

              <p>
                <a href="mailto:info@compassoffice.ae">info@compassoffice.ae</a>
              </p> */}
            </div>

            <div className="pb-4 col-xs-12 col-sm-12 col-md-4 text-center">
              <BsFillCalendarWeekFill />

              <h2 className="fw-bold pt-3 pb-3">Working Hours</h2>

              <p>Monday-Thursday: 9:00 am – 5:00 pm</p>
              <p>Friday: 9:00 am - 11:30 am</p>
              <p>Saturday-Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
