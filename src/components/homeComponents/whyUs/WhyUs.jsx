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
                  We possess the skills to fine-tune your printing strategy. Our
                  comprehensive evaluation of your print and document needs
                  ensures complete transparency, providing insights into cost
                  reduction and efficiency enhancement. Our distinctive{' '}
                  <Link>Managed Service solution.</Link> guarantees performance
                  optimization.
                </p>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>Integration</Link>

                  <p>
                    We provide digital printing solutions from globally
                    acclaimed manufacturers. Moreover, our customized technology
                    is enhanced through our collaboration and alliances with
                    leading software solution providers.
                  </p>
                </div>

                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>Advancement</Link>

                  <p>
                    We continually advance to deliver top-notch software and
                    hardware in the UAE, making substantial investments in
                    services, solutions, and products.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>Diversification</Link>

                  <p>
                    Our diversification as a multi-brand provider enables us to
                    offer the latest technological products and create document
                    workflow solutions for our clients.
                  </p>
                </div>

                <div className="col-sm-12 col-md-6 whyUs-content">
                  <Link>Autonomy</Link>

                  <p>
                    As an autonomous entity, MPS Company selects optimal
                    hardware and software solutions to fulfill customer
                    requirements and preferences.
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
