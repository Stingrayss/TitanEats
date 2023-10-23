import React, { useState } from 'react';
import "./components/RestaurantList/RestaurantList.css";
import "./components/ShoppingCart/ShoppingCart.css";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


function TitanEats() {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to your cart.');
      return;
    }

    const confirmation = window.confirm('Confirm your order?');
    if (confirmation) {
      const orderId = Math.floor(Math.random() * 1000); // Simulate order ID
      const orderDate = new Date().toLocaleString();
      const orderTotal = cart.reduce((total, item) => total + item.price, 0);

      const order = {
        id: orderId,
        date: orderDate,
        total: orderTotal,
      };

      setCart([]);
      setOrderHistory([...orderHistory, order]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TitanEats</h1>
      </header>
      <RestaurantList addToCart={addToCart} />
      <ShoppingCart cart={cart} checkout={checkout} removeFromCart={removeFromCart} />
    </div>
  );
}

export default TitanEats;
