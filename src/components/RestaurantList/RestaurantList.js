import React, { Component } from 'react';

class RestaurantList extends Component {
  render() {
    return (
      <section className="restaurant-list">
        <h2>Choose a Restaurant</h2>
        <ul>
          {/* Restaurant items with Add to Cart button */}
          <li>
            <img src="restaurant1.jpg" alt="Restaurant 1" />
            <h3>Restaurant 1</h3>
            <p>Italian Cuisine</p>
            <button onClick={() => this.props.addToCart({ item: 'Pizza', price: 10.99 })}>
              Add to Cart
            </button>
          </li>
          {/* Add more restaurants as needed */}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;
