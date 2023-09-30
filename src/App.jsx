import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Contact } from './components/contact/Contact';
import { AboutUs } from './components/aboutUs/AboutUs';
import { Benefits } from './components/benefits/Benefits';
import { Services } from './components/Services/Services';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
