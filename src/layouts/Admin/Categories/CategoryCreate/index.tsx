import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "./style";

import { CategoryValidation } from "../../../../validation/Category";
import { CategoryFormTypes } from "../../../../types/CategoryTypes";
import { createCategory, getCategories } from "../../../../api/Category";

import Alert from "../../../../components/Alert";
import Button from "../../../../components/Button";

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryFormTypes>({ resolver: yupResolver(CategoryValidation) });

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<CategoryFormTypes> = (data) => {
    setIsLoading(true);

    createCategory(data).then(function (response) {
      setCategories([...categories, response.data]);
      reset();
      setAlertMessage("Category was created successfully");
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCategories().then((response) => setCategories(response.data));
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

        <Button isLoading={isLoading}>Submit</Button>
      </form>
    </S.Create>
  );
};

export default CategoryCreate;
