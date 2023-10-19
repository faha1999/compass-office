import React from 'react';
import { AiOutlineClockCircle, AiTwotoneUnlock } from 'react-icons/ai';
import { GiGreenPower } from 'react-icons/gi';
import { FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Wrapper = () => {
  return (
    <>
      <div className="wrapper mt-4 pt-4 pb-4">
        <div className="container-fluid">
          <div className="row">
            <Link className="col-sm-12 col-md-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Assessment</h1>

                <FaWallet className="mb-0" />
              </div>

              <p>
                We diligently scrutinize your day-to-day operations to assess
                your organization's excess spending.
              </p>
            </Link>

            <Link className="col-sm-12 col-md-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Recommendation</h1>

                <AiTwotoneUnlock className="mb-0" />
              </div>

              <p>
                We can assist you in identifying the appropriate document
                management software that offers a range of control choices.
              </p>
            </Link>

            <Link className="col-sm-12 col-md-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Innovation</h1>

                <AiOutlineClockCircle className="mb-0" />
              </div>

              <p>
                We are innovating with cutting-edge technologies aimed at
                enhancing efficiency.
              </p>
            </Link>

            <Link className="col-sm-12 col-md-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Facilitation</h1>

                <GiGreenPower className="mb-0" />
              </div>

              <p>
                We will facilitate your search for the perfect software and
                hardware to attain eco-friendly printing and minimize waste.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
