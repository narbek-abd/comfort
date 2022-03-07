import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'; 
import { yupResolver } from '@hookform/resolvers/yup';

import * as S from "./style";
import * as G from "../../../../globalStyle";

type FormFields = {
  name: string;
  parend_id: number;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  parend_id: yup.number().required().integer(),
});

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  useEffect(() => {
    for (const field of Object.values(errors)) {
      (field.ref as HTMLElement).style.border = "1px solid var(--color-pink)";
    }
  }, [errors]);

  return (
    <S.Create>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Group>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </S.Group>

        <S.Group>
          <select {...register("parend_id", { required: true })}>
            <option value="0">no parent category</option>
            <option value="1">first</option>
            <option value="2">second</option>
          </select>
          {errors.parend_id && <span>{errors.parend_id.message}</span>}
        </S.Group>

        <S.Group>
          <G.Button type="submit">submit</G.Button>
        </S.Group>
      </form>
    </S.Create>
  );
};

export default CategoryCreate;
