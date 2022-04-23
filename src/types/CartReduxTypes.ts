export interface ProductItemTypes {
    id: number;
    quantity: number;
}

export interface CartState {
    products: ProductItemTypes[] | [];
}

export enum CartActionTypes {
    ADD_PRODUCTS = "ADD_PRODUCTS",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    CHANGE_PRODUCT_COUNT = "CHANGE_PRODUCT_COUNT",
    CLEAR_CART = "CLEAR_CART",
}

interface AddProductsAction {
    type: CartActionTypes.ADD_PRODUCTS;
    payload: ProductItemTypes[];
}
interface RemoveProductsAction {
    type: CartActionTypes.REMOVE_PRODUCT;
    payload: ProductItemTypes[];
}

interface ChangeProductCountAction {
    type: CartActionTypes.CHANGE_PRODUCT_COUNT;
    payload: ProductItemTypes[];
}

interface ClearCart {
    type: CartActionTypes.CLEAR_CART;
}

export type CartAction =
    | AddProductsAction
    | RemoveProductsAction
    | ChangeProductCountAction
    | ClearCart;
