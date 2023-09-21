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
            <Link className="col-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Cost Control</h1>

                <FaWallet className="mb-0" />
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat vel cumque obcaecati porro quis libero sapiente ipsa
                voluptas reiciendis repellat.
              </p>
            </Link>

            <Link className="col-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Security</h1>

                <AiTwotoneUnlock className="mb-0" />
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat vel cumque obcaecati porro quis libero sapiente ipsa
                voluptas reiciendis repellat.
              </p>
            </Link>

            <Link className="col-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Efficiency</h1>

                <AiOutlineClockCircle className="mb-0" />
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat vel cumque obcaecati porro quis libero sapiente ipsa
                voluptas reiciendis repellat.
              </p>
            </Link>

            <Link className="col-3 p-3 wrapperCard">
              <div className="d-flex justify-content-between">
                <h1>Green Printing</h1>

                <GiGreenPower className="mb-0" />
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat vel cumque obcaecati porro quis libero sapiente ipsa
                voluptas reiciendis repellat.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
