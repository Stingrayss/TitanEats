import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./RestaurantList.css";
import "../ShoppingCart/ShoppingCart.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


function RestaurantList(props) {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const navigate = useNavigate();

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

      navigate('/checkout',{state:{order, cart}});

      setCart([]);
      setOrderHistory([...orderHistory]);

    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h2>Choose a Restaurant</h2>
      <section className="restaurant-list">
        <ul>
          {/* Restaurant items with Add to Cart button */}
          <li>
            <img title='TOGO Sandwiches' src={require('./RestaurantImages/TOGOS.png')} alt="Restaurant 1" />
            <h3>TOGO's Sandwich Shop</h3>
            <p>Sandwich Restaurant</p>
            <button onClick={() => addToCart({ item: 'Sandwich', price: 7.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Pieology Pizza' src={require('./RestaurantImages/PIEOLOGY.jpg')} alt="Restaurant 2" />
            <h3>Pieology Pizza Restaurant</h3>
            <p>Pizza Restaurant</p>
            <button onClick={() => addToCart({ item: 'Pizza', price: 10.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Starbucks' src={require('./RestaurantImages/STARBUCKS.png')} alt="Restaurant 3" />
            <h3>Starbucks Coffee Shop</h3>
            <p>Cafe</p>
            <button onClick={() => addToCart({ item: 'Coffee', price: 4.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Carls Jr.' src={require('./RestaurantImages/CARLSJR.jpg')} alt="Restaurant 4" />
            <h3>Carl's Jr.</h3>
            <p>Hamburger Restaurant</p>
            <button onClick={() => addToCart({ item: 'Hamburger', price: 3.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Juice It Up' src={require('./RestaurantImages/JUICEITUP.jpg')} alt="Restaurant 5" />
            <h3>Juice It Up</h3>
            <p>Healthy Juice Bar</p>
            <button onClick={() => addToCart({ item: 'Smoothie', price: 5.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Panda Express' src={require('./RestaurantImages/PANDA.jpg')} alt="Restaurant 6" />
            <h3>Panda Express</h3>
            <p>Chinese Food Restaurant</p>
            <button onClick={() => addToCart({ item: 'Orange Chicken Bowl', price: 8.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Hibachi-san Japanese Kitchen' src={require('./RestaurantImages/HIBACHI.png')} alt="Restaurant 7" />
            <h3>Hibachi-san Japanese Kitchen</h3>
            <p>Japanese Food Restaurant</p>
            <button onClick={() => addToCart({ item: 'Sushi', price: 13.99 })}>
              Add to Cart
            </button>
          </li>
          <li>
          <img title='Baja Fresh Express' src={require('./RestaurantImages/BAJA.jpg')} alt="Restaurant 8" />
            <h3>Baja Fresh Express</h3>
            <p>Mexican Grill Restaurant</p>
            <button onClick={() => addToCart({ item: 'Burrito', price: 9.99 })}>
              Add to Cart
            </button>
          </li>
          {/* Add more restaurants as needed */}
        </ul>
      </section>
      <ShoppingCart cart={cart} checkout={checkout} removeFromCart={removeFromCart}/>
    </div>
  );
}

export default RestaurantList
;
