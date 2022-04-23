export interface LoginFormTypes {
  email: string;
  password: string;
  [params: string]: any;
}

export interface RegisterFormTypes {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  [params: string]: any;
}

export interface OrderFormTypes {
  email: string;
  name: string;
  address: string;
  products: { id: number; quantity: number }[];
  custom: string;
}

export interface CommentsFormTypes {
  email: string;
  name: string;
  text: string;
  product_id: string;
  parent_id: string;
}

export interface CategoryFormTypes {
  name: string;
  slug: string;
  parent_id: number;
}

export interface ProductFormTypes {
  name: string;
  price: number;
  quantity: number;
  category_id: number;
  images: any;
}

export interface FilterSideBarFormTypes {
  price_from: string;
  price_to: string;
  in_stock: boolean;
  out_of_stock: boolean;
  categories: boolean;
  [params: string]: any;
}
