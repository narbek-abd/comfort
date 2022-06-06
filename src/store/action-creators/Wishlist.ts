import { WishlistActionTypes } from "../../types/WishlistReduxTypes";

export const addProductToWishlist = (product_id: number) => {
  return {
    type: WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST,
    payload: product_id,
  };
};

export const removeFromWishlist = (product_id: number) => {
  return {
    type: WishlistActionTypes.REMOVE_PRODUCT_FROM_WISHLIT,
    payload: product_id,
  };
};

export const clearWishlist = () => {
  return {
    type: WishlistActionTypes.CLEAR_WISHLIST,
  };
};
