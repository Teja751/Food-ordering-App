import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext'; // Correct path
import { Link } from 'react-router-dom';
import './paymentPage.css';
const PaymentPage = () => {
  const { totalPrice } = useContext(RestaurantContext);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePayment = () => {
    // Logic to confirm payment method and simulate a payment
    if (paymentMethod) {
      alert(`Payment Successful with ${paymentMethod}`);
      // Reset payment method and close modal after payment
      setPaymentMethod(null);
      setShowModal(false);
    } else {
      alert('Please select a payment method');
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setShowModal(false);  // Close modal once a method is selected
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <p>Total Amount: ${totalPrice}</p>

      <button onClick={() => setShowModal(true)}>Pay Now</button>
      
      {/* Payment Method Selection Modal */}
      {showModal && (
        <div className="payment-modal">
          <h3>Select Payment Method</h3>
          <button onClick={() => handlePaymentMethodChange('Google Pay')}>Google Pay</button>
          <button onClick={() => handlePaymentMethodChange('Cash on Delivery')}>Cash on Delivery</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}

      <button onClick={handlePayment} disabled={!paymentMethod}>
        Confirm Payment
      </button>

      <Link to="/">Go Back to Menu</Link>
    </div>
  );
};

export default PaymentPage;
