export default interface RegisterFormTypes {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  [params:string]: any;
}