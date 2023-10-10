import React from 'react';
import { Link } from 'react-router-dom';

export const NewsCard = () => {
  return (
    <>
      <div className="col-sm-12 col-md-4 NewsCard pt-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1682145723071-33e2207f4eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhYmxlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="News Card"
        />

        <h1 className="pt-3">New MPS Consumables..</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum maxime
          quos natus possimus ut asperiores veritatis consectetur! Sapiente,
          atque nesciunt.
        </p>

        <Link className="button">Contact Us</Link>
      </div>
    </>
  );
};
