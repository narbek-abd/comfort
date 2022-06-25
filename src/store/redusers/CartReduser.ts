import {
  CartState,
  CartAction,
  CartActionTypes,
} from "types/CartReduxTypes";
import { RootState } from "./index";

const cart: CartState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
};

export const CartReduser = (state = cart, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS:
      let exitingProduct = state.products.find(
        (productItem) => productItem.id === action.payload
      );

      let newList = [];

      if (exitingProduct) {
        newList = state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: exitingProduct.quantity++ }
            : product
        );
      } else {
        newList = [...state.products, { id: action.payload, quantity: 1 }];
      }

      return {
        products: newList,
      };

    case CartActionTypes.REMOVE_PRODUCT:
      let filteredProductList = state.products.filter(
        (product) => product.id !== action.payload
      );
      
      return { products: filteredProductList };

    case CartActionTypes.CHANGE_PRODUCT_COUNT:
      let changedList = state.products.map((product) =>
        product.id === action.payload.product_id
          ? { ...product, quantity: action.payload.count }
          : product
      );

      return { products: changedList };

    case CartActionTypes.CLEAR_CART:
      localStorage.removeItem("cart");
      return { products: [] };

    default:
      return state;
  }
};

export const selectCartQuantity = (state: RootState) => {
  let products = state.cart.products;

  let quantity = 0;

  products.forEach((product) => {
    quantity += product.quantity;
  });

  return quantity;
};
