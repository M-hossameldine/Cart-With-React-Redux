import React from 'react';
import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import './App.css';

const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsvisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
