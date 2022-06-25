import { CartActionTypes } from "types/CartReduxTypes";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../redusers";

export const addProduct =
  (product_id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    dispatch({
      type: CartActionTypes.ADD_PRODUCTS,
      payload: product_id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.products));
  };

export const removeFromCart =
  (product_id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    dispatch({
      type: CartActionTypes.REMOVE_PRODUCT,
      payload: product_id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.products));
  };

export const changeProductCount =
  (
    product_id: number,
    count: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    dispatch({
      type: CartActionTypes.CHANGE_PRODUCT_COUNT,
      payload: { product_id, count },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.products));
  };

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
