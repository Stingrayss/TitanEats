import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <section className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {/* Display cart items with a "Remove" button */}
          {this.props.cart.map((item, index) => (
            <li key={index}>
              {item.item} - ${item.price.toFixed(2)}
              <button onClick={() => this.props.removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${this.props.cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        <button onClick={this.props.checkout}>Checkout</button>
      </section>
    );
  }
}

export default ShoppingCart;
