export interface OrderFormTypes {
  email: string;
  name: string;
  address: string;
  products: {id: number; quantity: number}[];
  custom: string;
}