import React from 'react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://plus.unsplash.com/premium_photo-1672997189763-7002561b5e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="About"
            />

            <div className="content position-absolute">
              <h1 className="text-white">Who We Are</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <h1 className="text-center pt-5 pb-5">About Us</h1>

          <div className="row">
            <div className="col-4 text-center">
              <h2>Ghobash Group</h2>

              <p className="pt-3 pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat? Tempora vel nesciunt
                placeat, facere rem perspiciatis error vero recusandae dolore
                quasi officia voluptas odio nam alias consectetur sed
                repellendus quam quod molestiae incidunt aliquid! Placeat illum
                saepe exercitationem architecto? Non ab veniam porro quam. Animi
                fugiat ipsum doloribus inventore tempore assumenda voluptatum!
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
            <div className="col-4">
              <img
                src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="About"
              />
            </div>
            <div className="col-4 text-center">
              <h2>Ghobash Group</h2>

              <p className="pt-3 pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat? Tempora vel nesciunt
                placeat, facere rem perspiciatis error vero recusandae dolore
                quasi officia voluptas odio nam alias consectetur sed
                repellendus quam quod molestiae incidunt aliquid! Placeat illum
                saepe exercitationem architecto? Non ab veniam porro quam. Animi
                fugiat ipsum doloribus inventore tempore assumenda voluptatum!
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
