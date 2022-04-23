import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const RegisterFormValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(3).required(),
  password_confirmation: yup.string().min(3).required(),
});

export const OrderFormValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
});

export const CommentsFormGuestValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  text: yup.string().required(),
});

export const CommentsFormValidation = yup.object().shape({
  text: yup.string().required(),
});

export const ProductValidation = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().required(),
  price: yup.number().typeError("you must specify a number").required(),
});

export const CategoryValidation = yup.object().shape({
  name: yup.string().required(),
  parent_id: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .integer(),
});
