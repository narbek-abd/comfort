import { WishlistActionTypes } from "types/WishlistReduxTypes";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../redusers";

export const addProductToWishlist =
  (product_id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    dispatch({
      type: WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST,
      payload: product_id,
    });

    localStorage.setItem(
      "wishlist",
      JSON.stringify(getState().wishlist.products)
    );
  };

export const removeFromWishlist =
  (product_id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    dispatch({
      type: WishlistActionTypes.REMOVE_PRODUCT_FROM_WISHLIT,
      payload: product_id,
    });

    localStorage.setItem(
      "wishlist",
      JSON.stringify(getState().wishlist.products)
    );
  };

export const clearWishlist = () => {
  return {
    type: WishlistActionTypes.CLEAR_WISHLIST,
  };
};
