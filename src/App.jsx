import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Contact } from './components/contact/Contact';
import { AboutUs } from './components/aboutUs/AboutUs';
import { Products } from './components/products/Products';
import { Services } from './components/Services/Services';
import { Technologies } from './components/technologies/Technologies';
// import { Expertise } from './components/expertise/Expertise';
// import { News } from './components/news/News';
import { UnderContraction } from './pages/UnderContraction';
import { TopProduct } from './components/products/TopProduct';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/products" element={<TopProduct />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            {/* <Route path="/expertise" element={<Expertise />} /> */}
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/another-action" element={<UnderContraction />} />
            <Route path="/something-else-here" element={<UnderContraction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
