// RestaurantCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    const navigate = useNavigate();

    const handleRestaurantClick = () => {
        navigate(`/restaurant/${restaurant._id}/menu`, { state: { restaurant } });
    };

    return (
        <div className="card" onClick={handleRestaurantClick}>
            <h3>{restaurant.name}</h3>
            <div className="image-container">
                <img className="restaurant-image" src={restaurant.image} alt={restaurant.name} />
            </div>
            <p>Rating: {restaurant.rating}</p>
        </div>
    );
};

export default RestaurantCard;
