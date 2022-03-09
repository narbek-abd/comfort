import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "./style";
import * as G from "../../../../globalStyle";
import axios from "axios";
import Alert from "../../../../components/Alert";

type FormFields = {
  name: string;
  parent_id: number;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  parent_id: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .integer(),
});

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    axios.post("http://comfort.loc/api/categories", {
      name: data.name,
      parent_id: data.parent_id,
    });
  };

  useEffect(() => {
    for (const field of Object.values(errors)) {
      (field.ref as HTMLElement).style.border = "1px solid var(--color-pink)";
    }
  }, [errors]);

  const [alertmessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] = useState("success");

  return (
    <S.Create>
      <Alert message={alertmessage} variant={alertvariant} />

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
          <select {...register("parent_id", { required: true })}>
            <option value="">no parent category</option>
            <option value="1">first</option>
            <option value="2">second</option>
          </select>
          {errors.parent_id && <span>{errors.parent_id.message}</span>}
        </S.Group>

        <S.Group>
          <G.Button type="submit">submit</G.Button>
        </S.Group>
      </form>
    </S.Create>
  );
};

export default CategoryCreate;
