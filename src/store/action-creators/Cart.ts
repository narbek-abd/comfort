import { CartActionTypes, ProductItemTypes } from "../../types/CartReduxTypes";
import { store } from "../";

export const addProduct = (product: ProductItemTypes) => {
  let products:ProductItemTypes[] = store.getState().cart.products;

  let productExists = products.find(
    (productItem) => productItem.id === product.id
  );

  if (productExists) {
    productExists.quantity++;
  } else {
    products.push({ id: product.id, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(products));

  return {
    type: CartActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

export const removeFromCart = (product: ProductItemTypes) => {
  let products:ProductItemTypes[] = store.getState().cart.products;

  let filteredProductList = products.filter(
    (productItem) => productItem.id !== product.id
  );
  localStorage.setItem("cart", JSON.stringify(filteredProductList));

  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: filteredProductList,
  };
};

export const changeProductCount = (product: ProductItemTypes, count: number) => {
  let products:ProductItemTypes[] = store.getState().cart.products;

  products.forEach((productItem) => {
    if (productItem.id === product.id) {
      productItem.quantity = count;
    }
  });

  localStorage.setItem("cart", JSON.stringify(products));

  return {
    type: CartActionTypes.CHANGE_PRODUCT_COUNT,
    payload: products,
  };
};

export const getTotalQuantity = () => {
  let products:ProductItemTypes[] = store.getState().cart.products;

  let quantity = 0;

  products.forEach((product) => {
    quantity += product.quantity;
  });

  return quantity;
};

export const clearCart = () => {
  localStorage.removeItem("cart");

  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
