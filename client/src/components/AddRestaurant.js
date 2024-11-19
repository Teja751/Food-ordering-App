import React, { useState } from 'react';
import axios from 'axios';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRestaurant = { name, address };

    axios.post('http://localhost:5000/restaurants', newRestaurant)
      .then(response => {
        console.log('Restaurant added:', response.data);
        // Optionally, clear the form or update UI after successful post
      })
      .catch(error => {
        console.error('Error adding restaurant:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Restaurant Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default AddRestaurant;
