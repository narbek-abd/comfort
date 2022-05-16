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
      let alreadyInWishlist = state.products.find(
        (product) => product.id === action.payload
      );
      if (alreadyInWishlist) return state;

      let newList = [...state.products, { id: action.payload }];
      localStorage.setItem("wishlist", JSON.stringify(newList));
      return { products: newList };

    case WishlistActionTypes.REMOVE_PRODUCT_FROM_WISHLIT:
      let filteredProductList = state.products.filter(
        (product) => (product as any).id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(filteredProductList));

      return { products: filteredProductList };

    case WishlistActionTypes.CLEAR_WISHLIST:
      localStorage.removeItem("wishlist");

      return { products: [] };

    default:
      return state;
  }
};
