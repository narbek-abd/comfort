import { WishlistActionTypes } from "../../types/WishlistReduxTypes";
import { store } from "../";

export const addProductToWishlist = (product: { id: number }) => {
  let products: { id: number }[] = store.getState().wishlist.products;

  let alreadyInWishlist = products.find(
    (storageProduct) => storageProduct.id === product.id
  );
  if (alreadyInWishlist) return;

  products.push({ id: product.id });

  localStorage.setItem("wishlist", JSON.stringify(products));

  return {
    type: WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST,
    payload: products,
  };
};

export const removeFromWishlist = (product: { id: number }) => {
  let products: { id: number }[] = store.getState().wishlist.products;

  let filteredProductList = products.filter(
    (productItem) => productItem.id !== product.id
  );
  localStorage.setItem("wishlist", JSON.stringify(filteredProductList));

  return {
    type: WishlistActionTypes.REMOVE_PRODUCT_FROM_WISHLIT,
    payload: filteredProductList,
  };
};

export const clearWishlist = () => {
  localStorage.removeItem("wishlist");

  return {
    type: WishlistActionTypes.CLEAR_WISHLIST,
  };
};
