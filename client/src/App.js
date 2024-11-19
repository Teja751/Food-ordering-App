import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import PaymentPage from './components/PaymentPage';
import OrderPage from './components/OrderPage';
import { RestaurantProvider } from './contexts/RestaurantContext';
import Navbar from "./components/Navbar";
import RestaurantCard from './components/RestaurantCard';
import RestaurantList from './components/RestaurantList';
import MainLayout from './components/MainLayout'; // Make sure MainLayout is correctly imported
import backgroundImage from './assets/background.jpg';
import MenuPage from './components/MenuPage';
import './Restaurant.css';
import YourComponent from './components/RestaurantList';
import LoginPage from './components/LoginPage';
import { RestaurantContext } from './contexts/RestaurantContext';
import RestaurantMenu from './components/RestaurantMenu';
import axios from 'axios';
import AddRestaurant from './components/AddRestaurant';
const App = () => {
  return (
      <RestaurantProvider>
        {/* MainLayout wraps around your entire content */}
        <MainLayout>
          <div className="container">
            <Navbar /> {/* Navbar will be inside the layout, appearing on all pages */}
            <Routes>
              {/* Define Routes for each page, the layout will persist across them */}
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/restaurants" element={<RestaurantList />} />  {/* Home page with restaurant list */}
              <Route path="/restaurant/:id/menu" element={<MenuPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/payment" element={<PaymentPage />} />  {/* Payment Page */}
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />

    
              </Routes>
          </div>
        </MainLayout>
        <YourComponent />
        
      </RestaurantProvider>
  );
};

export default App;
