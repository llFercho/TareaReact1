import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import data from './data';
import styles from './App.module.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <div className={styles.container}>
      <ProductList products={data} onAddToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;