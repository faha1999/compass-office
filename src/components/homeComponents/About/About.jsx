import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <div className="about pt-4 pb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 text-center pb-xs-5">
              <h2 className="pb-2">Ghobash Group</h2>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                voluptatibus necessitatibus. Magni, impedit ipsam quo porro
                eveniet neque quasi sint obcaecati rem illo suscipit unde hic
                sit fuga possimus quisquam distinctio labore consequuntur
                temporibus sapiente iusto? Accusamus harum optio beatae,
                explicabo ad temporibus unde animi ea voluptatem exercitationem
                quaerat illo?
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>

            <div
              className="col-sm-12 col-md-4"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXQlMjB1c3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)',
                borderRadius: '1rem',
              }}
            >
              <div className="about-text text-center">
                <h1>About Us</h1>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 text-center pt-xs-5">
              <h2 className="pb-2">Ghobash Group</h2>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                voluptatibus necessitatibus. Magni, impedit ipsam quo porro
                eveniet neque quasi sint obcaecati rem illo suscipit unde hic
                sit fuga possimus quisquam distinctio labore consequuntur
                temporibus sapiente iusto? Accusamus harum optio beatae,
                explicabo ad temporibus unde animi ea voluptatem exercitationem
                quaerat illo?
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
