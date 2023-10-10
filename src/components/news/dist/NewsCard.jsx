import React from 'react';
import { Link } from 'react-router-dom';

export const NewsCard = () => {
  return (
    <>
      <div className="row newsCard pt-5">
        <div className="col-sm-12 col-md-4">
          <img
            src="https://images.unsplash.com/photo-1625276254563-f0fbbf66a5e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FibGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="news-image"
          />
        </div>
        <div className="col-sm-12 col-md-8 pt-xs-5 pt-sm-3 pb-3">
          <h1>New MPS Consumables</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            officia cum, aut eos facilis, doloremque quos ut voluptatum illum,
            error alias omnis ullam repellat necessitatibus. Temporibus optio
            pariatur iure cupiditate.
          </p>

          <div className="d-flex justify-content-md-between pb-3 flex-xs-column">
            <h3>Posted on: 11 September 2023</h3>

            <Link className="learnMore">Learn More</Link>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};
