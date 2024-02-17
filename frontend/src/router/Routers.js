import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ThankYou from '../pages/ThankYou';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Forget from './../pages/Forget';
import Reset from './../pages/Reset';
import SearchResultList from './../pages/SearchResultList';
import TourDetails from './../pages/TourDetails';
import Tours from './../pages/Tours';
import Gallery from '../pages/Gallery';
import About from '../pages/About';

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home' />} />
         <Route path='/home' element={<Home />} />
         <Route path='/tours' element={<Tours />} />
         <Route path='/tours/:id' element={<TourDetails />} />
         <Route path='/gallery' element={<Gallery />} />
         <Route path='/about' element={<About />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/forget' element={<Forget />} />
         <Route path='/reset/:token' element={<Reset />} />
         <Route path='/thank-you' element={<ThankYou />} />
         <Route path='/tours/search' element={<SearchResultList />} />
      </Routes>
   );
};

export default Routers;