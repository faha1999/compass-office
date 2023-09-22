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
            <div className="col-6 WhatWeOffer-content">
              <Link className="pb-3 headLine">TECHNOLOGIES</Link>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                laboriosam natus numquam. Animi debitis nostrum vel aliquam
                beatae..... <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>

            <div className="col-6 WhatWeOffer-content">
              <Link className="pb-3 headLine">BENEFITS</Link>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                laboriosam natus numquam. Animi debitis nostrum vel aliquam
                beatae..... <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6 WhatWeOffer-content">
              <Link className="pb-3 headLine">SERVICES</Link>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                laboriosam natus numquam. Animi debitis nostrum vel aliquam
                beatae..... <Link className="readMore">Read More</Link>
              </p>

              <img
                src="https://plus.unsplash.com/premium_photo-1661486977235-b8c3eeafbefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SVQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="TECHNOLOGIES"
              />
            </div>

            <div className="col-6 WhatWeOffer-content">
              <Link className="pb-3 headLine">EXPERTISE</Link>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                laboriosam natus numquam. Animi debitis nostrum vel aliquam
                beatae..... <Link className="readMore">Read More</Link>
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
