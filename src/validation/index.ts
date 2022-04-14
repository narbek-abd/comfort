import * as yup from "yup";

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