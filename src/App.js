/**
 * (c) 2022-2023 PicDB | Akkil M G
 * @author: Akkil M G (https://github.com/HeimanPictures)
 * @license: GNU General Public License v3.0
**/ 

import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import { SpeedInsights } from "@vercel/speed-insights/react"

import './css/style.css';
import Home from './pages/Home';
import Header from './pages/component/Header';

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change
  
  inject();
  return (
    <div className="flex flex-col w-full min-h-screen bg-fixed bg-no-repeat bg-cover backdrop-blur-sm" id="journal-scroll" style={{backgroundImage: `url(${require("./asset/home.jpg")})`}}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
