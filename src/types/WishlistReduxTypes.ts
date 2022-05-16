export interface WishlistState {
    products: { id: number }[];
}

export enum WishlistActionTypes {
    ADD_PRODUCT_TO_WISHLIST = "ADD_PRODUCT_TO_WISHLIST",
    REMOVE_PRODUCT_FROM_WISHLIT = "REMOVE_PRODUCT_FROM_WISHLIT",
    CHANGE_PRODUCT_COUNT = "CHANGE_PRODUCT_COUNT",
    CLEAR_WISHLIST = "CLEAR_WISHLIST",
}

interface AddProductsAction {
    type: WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST;
    payload: number;
}
interface RemoveProductsAction {
    type: WishlistActionTypes.REMOVE_PRODUCT_FROM_WISHLIT;
    payload: number;
}

interface ClearWishlist {
    type: WishlistActionTypes.CLEAR_WISHLIST;
}

export type WishlistAction =
    | AddProductsAction
    | RemoveProductsAction
    | ClearWishlist;
