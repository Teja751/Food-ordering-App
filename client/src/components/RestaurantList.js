import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/restaurants')
      .then(response => {
        setRestaurants(response.data); // Assuming the backend sends an array of restaurants
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
