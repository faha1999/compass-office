import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FiAirplay } from 'react-icons/fi';

export const FooterMiddle = () => {
  return (
    <>
      <div className="FooterMiddle">
        <div className="container-fluid pt-4 pb-4">
          <div className="row">
            <div className="col-4">
              <img src={logo} alt="logo" />

              <p className="text-white pt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                aspernatur porro! Porro possimus maxime dolorem, iure nostrum
                dicta corrupti ad officiis excepturi fugit totam ipsum ratione
                quo numquam aspernatur fuga!
              </p>
            </div>

            <div className="col-4">
              <h1 className="text-white">RECENT POST</h1>

              <Link className="d-flex justify-content-between recentPostContent pt-3">
                <div className="img">
                  <FiAirplay />
                </div>

                <div>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum aperiam sunt, aut minus quae laborum.
                  </p>

                  <Link className="date">Sep 20, 2023</Link>
                </div>
              </Link>

              <Link className="d-flex justify-content-between recentPostContent pt-3">
                <div className="img">
                  <FiAirplay />
                </div>

                <div>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum aperiam sunt, aut minus quae laborum.
                  </p>

                  <Link className="date">Sep 20, 2023</Link>
                </div>
              </Link>
            </div>

            <div className="col-4 contactForm">
              <h1 className="text-white">EMAIL US</h1>

              <div className="form-floating mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Name"
                />
                <label for="floatingInput">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="info@uae-copier.com"
                />
                <label for="floatingInput">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Number"
                />
                <label for="floatingPassword">Number</label>
              </div>

              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave your message here"
                  id="floatingTextarea2"
                  style={{ height: '100px' }}
                ></textarea>
                <label for="floatingTextarea2">Message</label>
              </div>

              <Link className="button mt-3">Send</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
