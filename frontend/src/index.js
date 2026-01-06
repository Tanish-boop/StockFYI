import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import AboutPg from './landing_page/about/AboutPg';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/About' element={<AboutPg/>}/>
                <Route path='/Product' element={<ProductsPage/>}/>
                <Route path='/Pricing' element={<PricingPage/>}/>
                <Route path='/Support' element={<SupportPage/>}/>
                <Route path='*' element={<NotFound/>}/>              // if no route matches
            </Routes>
    <Footer/>
  </BrowserRouter>
);

