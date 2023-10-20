import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { Link } from 'react-router-dom';
import { AiTwotoneCustomerService } from 'react-icons/ai';

export const Benefits = () => {
  const bgImg1 =
    'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdGh1bXBzJTIwdXB8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60';
  return (
    <>
      <div className="Benefits">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="About"
            />

            <div className="content position-absolute">
              <h1 className="text-white">Find Out The Benefits</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <Meta title={'Benefits'} />
          <CurrentLocation title="Benefits" />

          <h1 className="text-center pt-5 pb-5">Benefits</h1>
          <p className="pb-5" style={{ textAlign: 'justify' }}>
            MPS Company excels as a frontrunner in Managed Services and Digital
            Document Services. Our approach melds industry proficiency with a
            team of specialists dedicated to offering top-notch client support.
            The versatility of our MPS services empowers us to provide tailored
            solutions, irrespective of the organization's scale. Within the
            realm of MPS services, you'll find dedicated teams delivering
            exceptional support in vital areas, including digital print
            production and strategic initiatives of larger scope.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div
              className="learnMoreCardImage"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="text-center learnMoreCard">
              <AiTwotoneCustomerService />

              <h2>UAE Copier</h2>

              <p>
                MPS Company is committed to achieving service Benefits, striving
                to provide unparalleled client support that enhances your
                business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div
              className="learnMoreCardImage"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="text-center learnMoreCard">
              <AiTwotoneCustomerService />

              <h2>UAE Copier</h2>

              <p>
                MPS Company is committed to achieving service Benefits, striving
                to provide unparalleled client support that enhances your
                business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div
              className="learnMoreCardImage"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="text-center learnMoreCard">
              <AiTwotoneCustomerService />

              <h2>UAE Copier</h2>

              <p>
                MPS Company is committed to achieving service Benefits, striving
                to provide unparalleled client support that enhances your
                business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div
              className="learnMoreCardImage"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="text-center learnMoreCard">
              <AiTwotoneCustomerService />

              <h2>UAE Copier</h2>

              <p>
                MPS Company is committed to achieving service Benefits, striving
                to provide unparalleled client support that enhances your
                business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div
              className="learnMoreCardImage"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="text-center learnMoreCard">
              <AiTwotoneCustomerService />

              <h2>UAE Copier</h2>

              <p>
                MPS Company is committed to achieving service Benefits, striving
                to provide unparalleled client support that enhances your
                business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div
              className="learnMoreCardImage"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="text-center learnMoreCard">
              <AiTwotoneCustomerService />

              <h2>UAE Copier</h2>

              <p>
                MPS Company is committed to achieving service Benefits, striving
                to provide unparalleled client support that enhances your
                business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
