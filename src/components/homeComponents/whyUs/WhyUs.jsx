import React from 'react';
import whyUs from '../../../assets/images/whyUs.png';
import { Link } from 'react-router-dom';

export const WhyUs = () => {
  return (
    <>
      <div className="whyUs pt-4 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div>
                <h1 className="text-center pt-5">WHY CHOOSE US ?</h1>

                <p className="text-justify">
                  We have expertise to optimize your print strategy. Thanks to
                  our print and document assessment, you will achieve a complete
                  transparency, understand how to increase savings and enhance
                  efficiency. We make sure to optimize your performance thanks
                  to our unique <Link>Managed Service solution.</Link>
                </p>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>DIGITAL</Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit laboriosam natus numquam. Animi debitis nostrum vel
                    aliquam beatae officia provident?
                  </p>
                </div>

                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>INNOVATION</Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit laboriosam natus numquam. Animi debitis nostrum vel
                    aliquam beatae officia provident?
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>TECHNOLOGIES</Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit laboriosam natus numquam. Animi debitis nostrum vel
                    aliquam beatae officia provident?
                  </p>
                </div>

                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>INDEPENDENCE</Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit laboriosam natus numquam. Animi debitis nostrum vel
                    aliquam beatae officia provident?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-xs-none d-sm-none d-md-block">
              <img src={whyUs} className="image" alt="whyUs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
