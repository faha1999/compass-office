import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { Link } from 'react-router-dom';
import { AiTwotoneCustomerService } from 'react-icons/ai';

export const Technologies = () => {
  const bgImg1 =
    'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdGh1bXBzJTIwdXB8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60';

  return (
    <>
      <Meta title={'Our Technologies'} />

      <div className="technologies">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="About"
            />

            <div className="content position-absolute">
              <h1 className="text-white">
                High-End Advanced <br /> Printing Technology
              </h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <CurrentLocation title="Technologies" />

          <h1 className="text-center pt-5 pb-5">TECHNOLOGY</h1>
          <p className="pb-5" style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            aliquam adipisci vel amet! Debitis tempore, impedit provident
            facilis, ab dignissimos repellat beatae eum, modi cupiditate sunt
            laboriosam. Aut veniam ab tempore, quam illo perspiciatis accusamus
            minima maiores placeat rerum similique suscipit ut numquam mollitia
            laudantium dolor pariatur. At, dolore autem repellendus modi quam
            temporibus doloremque amet laboriosam delectus quas pariatur quaerat
            sed iste quis praesentium possimus, optio veritatis distinctio.
            Rerum cupiditate quaerat eligendi sunt obcaecati magnam pariatur
            voluptatibus laboriosam fugit ea officiis suscipit asperiores
            exercitationem quas quos, mollitia perferendis atque natus, quasi
            doloremque accusantium tempora iure doloribus maiores. Odio,
            doloremque.
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
                MPS Company is committed to achieving service excellence,
                striving to provide unparalleled client support that enhances
                your business performance to the fullest.
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
                MPS Company is committed to achieving service excellence,
                striving to provide unparalleled client support that enhances
                your business performance to the fullest.
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
                MPS Company is committed to achieving service excellence,
                striving to provide unparalleled client support that enhances
                your business performance to the fullest.
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
                MPS Company is committed to achieving service excellence,
                striving to provide unparalleled client support that enhances
                your business performance to the fullest.
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
                MPS Company is committed to achieving service excellence,
                striving to provide unparalleled client support that enhances
                your business performance to the fullest.
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
                MPS Company is committed to achieving service excellence,
                striving to provide unparalleled client support that enhances
                your business performance to the fullest.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
