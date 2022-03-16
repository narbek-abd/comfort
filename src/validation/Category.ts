import * as yup from "yup";

export const CategoryValidation = yup.object().shape({
  name: yup.string().required(),
  parent_id: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .integer(),
});