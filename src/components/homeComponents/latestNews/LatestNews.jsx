import React from 'react';
import { NewsCard } from './NewsCard.jsx/NewsCard';

export const LatestNews = () => {
  return (
    <>
      <div className="latestNews pt-5 pb-5">
        <h1 className="text-center pb-3">Latest News</h1>
        <hr className="hr" />

        <div className="container-fluid pt-3">
          <div className="row">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
};
