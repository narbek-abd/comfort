import { CategoryTypes } from "./CategoryTypes";
import { InitialImagesTypes } from "./UploadedImageTypes";

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
    category: CategoryTypes;
    images: InitialImagesTypes;
}
