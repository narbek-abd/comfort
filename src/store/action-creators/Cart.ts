import { CartActionTypes, ProductItemTypes } from "../../types/CartReduxTypes";
import { store } from "../";

export const addProduct = (product_id: number) => {
  return {
    type: CartActionTypes.ADD_PRODUCTS,
    payload: product_id,
  };
};

export const removeFromCart = (product_id: number) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: product_id,
  };
};

export const changeProductCount = (product_id: number, count: number) => {
  return {
    type: CartActionTypes.CHANGE_PRODUCT_COUNT,
    payload: { product_id, count },
  };
};

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
