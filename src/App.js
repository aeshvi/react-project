import React from 'react';
import { useState } from 'react';
import ShoppingCart from './componets/ShoppingCart';
import './App.css';

const products = [
  { id: 1, price: 20,className:'product',image:'image1.jpeg',},
  { id: 2, price: 30,image:'image2.jpeg' },
  { id: 3, price: 25, image:'image3.jpeg'},
];

const Cart = ({ cart, removeFromCart }) => (
  <div>
    {/* <h2>Shopping Cart</h2> */}
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.name} ${item.price}{' '}
          <button className='remove' onClick={() => removeFromCart(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  </div>
);

const Products = ({ addToCart }) => (
  <div>
    <h2>Products</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} style={{width:'400px', padding:'20px',margin:"20px"}} />
          {product.name} ${product.price}{' '}
          <button className='add' onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      {/* <h1>Simple Shopping Cart</h1> */}
      <div style={{ display: 'flex' }}>
        <Products addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <ShoppingCart />

      </div>
    </div>
  );
};

export default App;
