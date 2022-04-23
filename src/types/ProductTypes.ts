import { CategoryTypes } from "./CategoryTypes";
import { ImageTypes } from "./ImageTypes";

export interface ProductTypes {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category_id: number;
    description: string;
    category: CategoryTypes;
    images: ImageTypes[];
    storageQuantity?: number;
}