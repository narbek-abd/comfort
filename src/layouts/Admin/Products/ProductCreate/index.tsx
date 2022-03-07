import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from '@hookform/resolvers/yup';

import * as G from "../../../../globalStyle";
import * as S from "./style";

type FormFields = {
  name: string;
  parend_id: number;
  price: number;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().typeError('you must specify a number').required().integer(),
});

const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  return (
    <S.Create>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Group>
          <input
            type="text"
            placeholder="name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </S.Group>

        <S.Group>
          <input
            type="text"
            placeholder="price"
            {...register("price")}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </S.Group>

        <S.Group>
          <G.Button type="submit">submit</G.Button>
        </S.Group>
      </form>
    </S.Create>
  );
};

export default ProductCreate;
