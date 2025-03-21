import React from 'react';
import { Helmet } from 'react-helmet';

export const Meta = (props) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
};
