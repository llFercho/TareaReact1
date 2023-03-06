import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;