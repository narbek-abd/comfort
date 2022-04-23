import { CartState, CartAction, CartActionTypes } from "../../types/CartReduxTypes";

const cart: CartState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

export const CartReduser = (state = cart, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS:
      return { products: action.payload };

    case CartActionTypes.REMOVE_PRODUCT:
      return { products: action.payload };

    case CartActionTypes.CHANGE_PRODUCT_COUNT:
      return { products: action.payload };

    case CartActionTypes.CLEAR_CART:
      return { products: [] };

    default:
      return state;
  }
};
