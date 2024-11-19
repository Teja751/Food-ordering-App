import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';  // Adjust this if needed

const RestaurantMenu = () => {
  const { restaurantId } = useParams();  // Capture restaurantId from the URL
  const { restaurants } = useContext(RestaurantContext);
  const [menu, setMenu] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the selected restaurant based on the restaurantId
    const restaurant = restaurants.find((r) => r._id === restaurantId);
    setSelectedRestaurant(restaurant);

    if (restaurant) {
      // Assuming each restaurant object has a 'menu' array, set it to the state
      setMenu(restaurant.menu);
    }
  }, [restaurantId, restaurants]);

  if (!selectedRestaurant) {
    return <div>Restaurant not found.</div>;
  }

  return (
    <div>
      <h2>{selectedRestaurant.name} Menu</h2>

      <div className="menu-items">
        {menu.length > 0 ? (
          menu.map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <p>No menu available.</p>
        )}
      </div>

      <button onClick={() => navigate('/')} className="back-button">
        Back to Restaurant List
      </button>
    </div>
  );
};

export default RestaurantMenu;
