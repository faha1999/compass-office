import React from 'react';
import { Link } from 'react-router-dom';

export const WhatWeOffer = () => {
  return (
    <>
      <div className="WhatWeOffer pt-5 pb-5">
        <h1 className="text-center pb-3">What We Offer</h1>

        <hr className="hr" />

        <div className="container-fluid mt-5 pt-3">
          <div className="row">
            <div className="col-sm-12 col-md-6 WhatWeOffer-content">
              <Link className="pb-3 headLine">Benefits</Link>

              <p>
                MPS Company holds a top position in Managed Services and Digital
                Document Services, merging industry knowledge with.....
                <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>

            <div className="col-sm-12 col-md-6 WhatWeOffer-content pt-xs-5">
              <Link className="pb-3 headLine">Technology</Link>

              <p>
                Our technology lies in MPS's ability to select from top-tier
                brands in the print, copy, and scan sector. Coupled with our
                proficiency in on-site device.....
                <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 WhatWeOffer-content pt-xs-5">
              <Link className="pb-3 headLine">Services</Link>

              <p>
                MPS Company holds a dominant position in the field of Managed
                Services and Digital Document Services, uniting industry
                knowledge with..... <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>

            <div className="col-sm-12 col-md-6 WhatWeOffer-content pt-xs-5">
              <Link className="pb-3 headLine">Expertise</Link>

              <p>
                With over three decades of expertise, operating under the UAE
                Copier, MPS Company has become the leading managed service
                provider..... <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
