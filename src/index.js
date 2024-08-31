/**
 * (c) 2022-2023 PicDB | Akkil M G
 * @author: Akkil M G (https://github.com/HeimanPictures)
 * @license: GNU General Public License v3.0
**/ 

import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
