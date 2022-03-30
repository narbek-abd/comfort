import { CategoryTypes } from "./CategoryTypes";
import { ImageTypes } from "./ImageTypes";

export interface ProductFormTypes {
    name: string;
    price: number;
    category_id: number;
    images: any;
}

export interface ProductTypes {
    id: number;
    name: string;
    price: number;
    category_id: number;
    description: string;
    category: CategoryTypes;
    images: ImageTypes[];
}
