import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { NewsCard } from './dist/NewsCard';
import { Link } from 'react-router-dom';

export const News = () => {
  const bgImg1 =
    'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdGh1bXBzJTIwdXB8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60';

  return (
    <>
      <Meta title={'Latest News'} />
      <div className="news">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="About"
            />

            <div className="content position-absolute">
              <h1 className="text-white">Latest News</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <CurrentLocation title="Latest News" />

          <div className="row">
            <div className="col-sm-12 col-md-8">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>

            <div className="col-sm-12 col-md-4">
              <h1 className="text-center tags">Tags</h1>

              <div className="d-flex justify-content-center flex-wrap">
                <Link className="tagBtn">Printing</Link>
                <Link className="tagBtn">printing technology</Link>
                <Link className="tagBtn">Printing</Link>
                <Link className="tagBtn">Printing</Link>
                <Link className="tagBtn">Printing</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
