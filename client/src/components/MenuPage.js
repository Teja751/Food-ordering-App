import React, { useState, useContext, useEffect } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { useNavigate } from 'react-router-dom';  
import { useParams } from 'react-router-dom';

const MenuPage = () => {
    const { restaurants, setSelectedRestaurant } = useContext(RestaurantContext);
    const [cart, setCart] = useState([]);
    const { addToCart } = useContext(RestaurantContext);
  const navigate = useNavigate();
  const { restaurantId } = useParams(); // Get the restaurantId from the URL
  const [restaurantMenu, setRestaurantMenu] = useState([]);

    const handleAddToCart = (item) => {
        console.log('Adding to cart:', item);  // Log the item being added to the cart
    addToCart(item);  // Add the item to the cart (through context)
    navigate('/order');
    };
    useEffect(() => {
        // Fetch menu data for the specific restaurant
        // For now, we'll mock the data; replace with your API or data source
        const fetchMenu = async () => {
          const response = await fetch(`/api/restaurants/${restaurantId}/menu`);
          const data = await response.json();
          setRestaurantMenu(data); // Set the menu data
        };
        
        fetchMenu();
      }, [restaurantId])

    return (
        <div>
            {restaurants.map((restaurant) => (
                <div key={restaurant._id}>
                    <h2>{restaurant.name}</h2>
                    <div>
                        {restaurant.foodItems.map((foodItem) => (
                            <div key={foodItem.id} className="food-item">
                                <img src={foodItem.image} alt={foodItem.name} />
                                <h3>{foodItem.name}</h3>
                                <p>{foodItem.description}</p>
                                <p>₹{foodItem.price}</p>
                                <button onClick={() => handleAddToCart(foodItem)}>
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuPage;
