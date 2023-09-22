import React from 'react';
import { Link } from 'react-router-dom';

export const Subscription = () => {
  return (
    <>
      <div className="subscription">
        <div className="container-fluid height">
          <div className="d-flex justify-content-between">
            <div className="left text-white">
              <h1>Interested?</h1>
            </div>
            <div className="right">
              <Link className="button">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
