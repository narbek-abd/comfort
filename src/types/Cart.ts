interface productItem {
    id: number;
    quantity: number;
}

export interface CartState {
    products: productItem[] | [];
}

export enum CartActionTypes {
    ADD_PRODUCTS = "ADD_PRODUCTS",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    CHANGE_PRODUCT_COUNT = "CHANGE_PRODUCT_COUNT",
    CLEAR_CART = "CLEAR_CART",
}

interface AddProductsAction {
    type: CartActionTypes.ADD_PRODUCTS;
    payload: any;
}
interface RemoveProductsAction {
    type: CartActionTypes.REMOVE_PRODUCT;
    payload: any;
}

interface ChangeProductCountAction {
    type: CartActionTypes.CHANGE_PRODUCT_COUNT;
    payload: any;
}

interface ClearCart {
    type: CartActionTypes.CLEAR_CART;
}

export type CartAction =
    | AddProductsAction
    | RemoveProductsAction
    | ChangeProductCountAction
    | ClearCart;
