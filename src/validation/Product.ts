import * as yup from "yup";

export const ProductValidation = yup.object().shape({
  name: yup.string().required(),
  price: yup
    .number()
    .typeError("you must specify a number")
    .required()
});
