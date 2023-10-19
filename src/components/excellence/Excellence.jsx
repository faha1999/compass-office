import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { Link } from 'react-router-dom';
import { AiTwotoneCustomerService } from 'react-icons/ai';

export const Excellence = () => {
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
          <Meta title={'BENEFITS'} />
          <CurrentLocation title="BENEFITS" />

          <h1 className="text-center pt-5 pb-5">BENEFITS</h1>
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

              <h2>Ghobash Group</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat.
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

              <h2>Ghobash Group</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat.
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

              <h2>Ghobash Group</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat.
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

              <h2>Ghobash Group</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat.
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

              <h2>Ghobash Group</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat.
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

              <h2>Ghobash Group</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quae aliquam officia eius quidem praesentium eos id
                voluptas inventore? Maxime mollitia laborum ex soluta autem,
                repellat repudiandae neque aspernatur enim doloribus blanditiis
                asperiores aperiam, quibusdam eius fugiat.
              </p>

              <Link className="learnMore">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
