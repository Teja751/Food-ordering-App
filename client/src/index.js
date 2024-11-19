import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RestaurantProvider } from "./contexts/RestaurantContext";

import RegistrationPage from './components/RegistrationPage';
import backgroundImage from './assets/background.jpg';

import RestaurantList from './components/RestaurantList';

import './Restaurant.css';
import { BrowserRouter } from 'react-router-dom';
import PaymentPage from './components/PaymentPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Brow serRouter and RestaurantProvider wrapped around it
root.render(
  <BrowserRouter>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </BrowserRouter>
);

reportWebVitals();
