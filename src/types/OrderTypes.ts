import { ProductTypes } from './ProductTypes';

export interface OrderTypes {
    id: number;
    name: string;
    address: string;
    email: string;
    products: ProductTypes[];
}
