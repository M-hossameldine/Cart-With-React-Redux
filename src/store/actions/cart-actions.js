import { uiActions } from '../reducers/ui-slice';
import { cartActions } from '../reducers/cart-slice';

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://cart-with-redux-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        console.log('error entered');
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 1000);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendGetRequest = async () => {
      const response = await fetch(
        'https://cart-with-redux-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Failed to get cart data!');
      }

      let cartData = await response.json();
      console.log(cartData);

      return cartData;
    };

    try {
      const cartData = await sendGetRequest();

      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
