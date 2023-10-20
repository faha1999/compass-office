import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { Link } from 'react-router-dom';
import { AiTwotoneCustomerService } from 'react-icons/ai';

export const Services = () => {
  const bgImg1 =
    'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdGh1bXBzJTIwdXB8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60';

  return (
    <>
      <Meta title={'Services us'} />

      <div className="services">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://plus.unsplash.com/premium_photo-1680037568964-6d0ccae595d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByaW50aW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="About"
            />

            <div className="content position-absolute">
              <h1 className="text-white">Extensive Printing Services</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <CurrentLocation title="Services" />

          <h1 className="text-center pt-5 pb-5">SERVICES</h1>
          <p className="pb-5" style={{ textAlign: 'justify' }}>
            MPS Company stands at the forefront in the realm of Managed Services
            and Digital Document Services. We merge industry knowledge with a
            specialized team, ensuring top-tier client support. Our MPS services
            are adaptable, enabling us to furnish customized solutions,
            regardless of an organization's size. Within MPS services, you'll
            find dedicated teams delivering exceptional support, particularly in
            domains like digital print and production systems, as well as larger
            strategic accounts.
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
