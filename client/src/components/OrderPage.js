import React, { useContext } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext'; // Correct path
import { Link } from 'react-router-dom';

const OrderPage = () => {
  const { cart, totalPrice, emptyCart } = useContext(RestaurantContext);

  // Function to handle clearing the order
  const handleClearOrder = () => {
    emptyCart();  // Clears the cart and resets total price
  };

  return (
    <div>
      <h2>Your Order Summary</h2>
      
      {/* Display cart items */}
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty!</li>
        ) : (
          cart.map((item) => (
            <li key={item._id}>
              {item.name} - ${item.price}
            </li>
          ))
        )}
      </ul>
      
      {/* Total price */}
      <h3>Total: ${totalPrice}</h3>
      
      {/* Buttons */}
      <button onClick={handleClearOrder}>Clear the Order</button> {/* Clear the order button */}
      
      <Link to="/">Go Back to Menu</Link>  {/* Link to go back to menu */}

      {cart.length > 0 && (
        <Link to="/payment">
          <button>Proceed to Payment</button>  {/* Navigate to payment page */}
        </Link>
      )}
    </div>
  );
};

export default OrderPage;
