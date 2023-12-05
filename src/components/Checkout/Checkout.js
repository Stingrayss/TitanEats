import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const location = useLocation();
  const { order, cart } = location.state || { order: {}, cart: [] };

  const cartArray = Array.isArray(cart) ? cart : Object.values(cart);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission if needed
  };

  return (
    <div className='checkout'>
      <div className="checkout-form">
        <h2>Checkout</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
          <legend>First Name</legend>
            <input type="text" id="firstName" name="firstName" value={state.firstName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
          <legend>Last Name</legend>
            <input type="text" id="lastName" name="lastName" value={state.lastName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
          <legend>Address</legend>
            <input type="text" id="address" name="address" value={state.address} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
          <legend>State</legend>
            <input type="text" id="state" name="state" value={state.state} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
          <legend>Zip Code</legend>
            <input type="text" id="zipCode" name="zipCode" value={state.zipCode} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
          <legend>Card Number</legend>
            <input type="text" id="cardNumber" name="cardNumber" value={state.cardNumber} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <legend>Expiration Date</legend>
            <input type="text" id="expirationDate" name="expirationDate" value={state.expirationDate} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <legend>CVV</legend>
            <input type="text" id="cvv" name="cvv" value={state.cvv} onChange={handleInputChange} required />
          </div>

          <button type="submit" className='submit-button'>Submit</button>
        </form>
      </div>
      <div className="cart-items">
        <h2>Cart</h2>

          {cartArray.map((item, index) => (
            <p key={index}>
              {item.item} - ${item.price.toFixed(2)}
            </p>
          ))}

        <h2>Total: ${order.total}</h2>
      </div>
    </div>

  );
};

export default Checkout;
