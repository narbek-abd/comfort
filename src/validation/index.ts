import * as yup from "yup";

export const OrderFormValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
});