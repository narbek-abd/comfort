import {
  WishlistState,
  WishlistAction,
  WishlistActionTypes,
} from "../../types/WishlistReduxTypes";

const wishlist: WishlistState = {
  products: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const WishlistReduser = (state = wishlist, action: WishlistAction) => {
  switch (action.type) {
    case WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST:
      return { products: action.payload };

    case WishlistActionTypes.REMOVE_PRODUCT_FROM_WISHLIT:
      return { products: action.payload };

    case WishlistActionTypes.CLEAR_WISHLIST:
      return { products: [] };

    default:
      return state;
  }
};
