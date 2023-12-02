import React, { useState } from 'react';
// import Product from "./Product"
import Cart from "./Cart"
const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="shopping-cart">
      <div className="product-list">
        {/* <h2>Product List</h2> */}
        {/* <Product product={{ id: 1, name: 'Cropped Stay Groovy off white', price: 10.90}} onAddToCart={addToCart} />
        <Product product={{ id: 2, name: 'Basic Cactus White T-shirt', price: 13.25 }} onAddToCart={addToCart} /> */}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default ShoppingCart;