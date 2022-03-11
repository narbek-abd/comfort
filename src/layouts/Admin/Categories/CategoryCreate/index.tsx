import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "./style";
import * as G from "../../../../globalStyle";
import Alert from "../../../../components/Alert";
import Spinner from "../../../../components/Spinner";
import LoadingButton from "../../../../components/LoadingButton";

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
    reset,
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setIsLoading(true);

    axios
      .post("http://comfort.loc/api/categories", {
        name: data.name,
        parent_id: data.parent_id,
      })
      .then(function (response) {
        setCategories([...categories, response.data]);
        reset();
        setAlertMessage("Category was created successfully");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get("http://comfort.loc/api/categories/list")
      .then(function (response) {
        setCategories(response.data);
      });
  }, []);

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
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {errors.parent_id && <span>{errors.parent_id.message}</span>}
        </S.Group>

        <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
      </form>
    </S.Create>
  );
};

export default CategoryCreate;
