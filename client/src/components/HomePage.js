import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { RestaurantContext } from '../contexts/RestaurantContext';

const RestaurantList = () => {
    const { restaurants, setSelectedRestaurant } = useContext(RestaurantContext);
    const [filteredRestaurants, setFilteredRestaurants] = useState([...restaurants]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showOrder, setShowOrder] = useState(false);

    const navigate = useNavigate();  // useNavigate hook to handle navigation

    useEffect(() => {
        filterRestaurants();
    }, [searchTerm, restaurants]);

    const handleRestaurantClick = (restaurantId) => {
        setSelectedRestaurant(restaurants.find((restaurant) => restaurant._id === restaurantId));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterRestaurants = () => {
        let filtered = restaurants;

        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter((restaurant) =>
                restaurant.name.toLowerCase().includes(searchLower)
            );
        }

        setFilteredRestaurants(filtered);
    };

    const handleShow = () => {
        setShowOrder(!showOrder);
    };

    const handleLoginClick = () => {
        // Navigate to the login page when the button is clicked
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="header-container">
                <h2 className="header">Restaurant List</h2>
                <button onClick={handleLoginClick} className="login-button">
                    Login
                </button>
            </div>
            
            <div className="filter-container">
                <label htmlFor="search" className="filter-label">
                    Search by Name:
                </label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="filter-input"
                />
                <p id="pre-orders" onClick={handleShow}>
                    {/* You can add some other logic or content here if needed */}
                </p>
            </div>

            <div className="restaurant-card-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                        onClick={() => handleRestaurantClick(restaurant._id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantList;
