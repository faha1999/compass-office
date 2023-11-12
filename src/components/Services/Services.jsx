import React from 'react';
import { Meta } from '../../layout/currentLocation/Meta';
import { CurrentLocation } from '../../layout/currentLocation/CurrentLocation';
import { Link } from 'react-router-dom';
import { AiTwotoneCustomerService } from 'react-icons/ai';
import services from '../../assets/images/Services.webp';

export const Services = () => {
  const bgImg1 =
    'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwdGh1bXBzJTIwdXB8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60';

  return (
    <>
      <Meta title={'Services us'} />

      <div className="services">
        <div className="pageHero">
          <div className="img w-100 position-relative">
            <img className="w-100" src={services} alt="services" />

            <div className="content position-absolute">
              <h1 className="text-white">Extensive Printing Services</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <CurrentLocation title="Services" />

          <h1 className="text-center pt-5 pb-5">SERVICES</h1>
          <p className="pb-5" style={{ textAlign: 'justify' }}>
            At Compass Office, we specialize in providing high-quality imaging
            supplies for Copier/MFP equipment, catering to the diverse needs of
            rental, outsourcing, and Managed Print Services (MPS) businesses.
            Our expertise lies in delivering tailored toners and parts for
            Copier/MFP devices, ensuring that every product meets the unique
            demands of our clients.
          </p>
        </div>
      </div>
    </>
  );
};
