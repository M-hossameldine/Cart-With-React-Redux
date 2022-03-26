import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/actions/cart-actions';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsvisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
