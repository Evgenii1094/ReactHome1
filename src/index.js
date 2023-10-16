import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/app/App';
import OurCoffee from './pages/ourCoffee/OurCoffee';
import OurPleasure from './pages/ourPleasure/OurPleasure';
import ExCoffee from './pages/exCoffee/ExCoffee';

import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route path="/OurCoffee" element={<OurCoffee/>} />
            <Route path="/OurPleasure" element={<OurPleasure/>} />
            <Route path="/ExCoffee" element={<ExCoffee/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
);
