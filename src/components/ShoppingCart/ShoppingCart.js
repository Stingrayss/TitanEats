import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    isCartOpen: false,
  };

  toggleCart = () => {
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  render() {
    const { cart, removeFromCart, checkout } = this.props;
    const { isCartOpen } = this.state;
    const cartItemCount = cart.length; // Calculate the number of items in the cart

    return (
      <div className="shopping-cart">
        <button className="shopping-cart-toggle" onClick={this.toggleCart}>
          <p className='cart-button'>Cart</p>
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>
        {isCartOpen && (
          <div className="shopping-cart-sidebar">
            <h3>Your Shopping Cart</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.item} - ${item.price.toFixed(2)}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>

            {/* Use state to pass data to the Checkout component */}
            <button onClick={checkout} className='checkout-button'>
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
