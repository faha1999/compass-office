import React from 'react';
import { Link } from 'react-router-dom';

export const CurrentLocation = ({ title }) => {
  return (
    <div className="CurrentLocation mb-0 py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              <Link to="/" className="text-dark">
                Home
              </Link>
              {''} / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
