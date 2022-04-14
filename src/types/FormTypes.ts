export interface OrderFormTypes {
  email: string;
  name: string;
  address: string;
  products: {id: number; quantity: number}[];
  custom: string;
}

export interface CommentsFormTypes {
  email: string;
  name: string;
  text: string;
  product_id: string;
  parent_id: string;
}