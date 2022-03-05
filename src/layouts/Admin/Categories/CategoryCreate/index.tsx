import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as S from "./style";
import * as G from "../../../../globalStyle";

type FormFields = {
  name: string;
  parend_id: number;
};

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
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
          {errors.name && errors.name.type === "required" && (
            <span>Name is required</span>
          )}
        </S.Group>

        <S.Group>
          <select {...register("parend_id", { required: true })}>
            <option value="0">no parent category</option>
            <option value="1">first</option>
            <option value="2">second</option>
          </select>
        </S.Group>

        <S.Group>
          <G.Button type="submit">submit</G.Button>
        </S.Group>
      </form>
    </S.Create>
  );
};

export default CategoryCreate;
