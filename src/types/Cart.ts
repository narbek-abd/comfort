interface productItem {
    id: number;
    quantity: number
}

export interface CartState {
    products: productItem[] | []
}


export enum CartActionTypes {
    ADD_PRODUCTS = 'ADD_PRODUCTS',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT',
}


interface AddProductsAction {
    type: CartActionTypes.ADD_PRODUCTS;
    payload: any
}
interface RemoveProductsAction {
    type: CartActionTypes.REMOVE_PRODUCT;
    payload: any;
}

interface ChangeProductCountAction  {
    type: CartActionTypes.CHANGE_PRODUCT_COUNT;
    payload: any;
}


export type CartAction = AddProductsAction | RemoveProductsAction | ChangeProductCountAction
