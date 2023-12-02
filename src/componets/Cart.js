import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;