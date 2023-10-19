import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Contact } from './components/contact/Contact';
import { AboutUs } from './components/aboutUs/AboutUs';
import { Excellence } from './components/excellence/Excellence';
import { Services } from './components/Services/Services';
import { Technologies } from './components/technologies/Technologies';
import { Expertise } from './components/expertise/Expertise';
import { News } from './components/news/News';
import { UnderContraction } from './pages/UnderContraction';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/excellence" element={<Excellence />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/news" element={<News />} />
            <Route path="/another-action" element={<UnderContraction />} />
            <Route path="/something-else-here" element={<UnderContraction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
