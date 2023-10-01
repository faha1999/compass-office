import React from 'react';

export const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.0028080836196!2d55.30809307538427!3d25.270490977663822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzEzLjgiTiA1NcKwMTgnMzguNCJF!5e0!3m2!1sen!2s!4v1696180748408!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </>
  );
};
