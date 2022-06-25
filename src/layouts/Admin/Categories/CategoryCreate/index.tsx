import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "./style";

import { CategoryValidation } from "../../../../validation";
import { CategoryFormTypes } from "../../../../types/FormTypes";

import Alert, { AlertProps } from "../../../../components/Alert";
import Button from "../../../../components/Button";
import api from "../../../../api";
import useIsMounted from "../../../../hooks/useIsMounted";

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryFormTypes>({ resolver: yupResolver(CategoryValidation) });

  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useIsMounted();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] =
    useState<AlertProps["variant"]>("success");

  const onSubmit: SubmitHandler<CategoryFormTypes> = async (data) => {
    setIsLoading(true);

    let response = await api.categories.createCategory(data);
    if (!isMounted()) return;

    setCategories([...categories, response.data]);
    reset();
    setAlertMessage("Category was created successfully");
    setIsLoading(false);
  };

  useEffect(() => {
    api.categories.getCategories().then((response) => {
      isMounted() && setCategories(response.data);
    });
  }, [isMounted]);

  return (
    <S.Create>
      {alertMessage && <Alert variant={alertvariant}>{alertMessage}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Group>
          <input type="text" placeholder="name" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </S.Group>

        <S.Group>
          <select {...register("parent_id")}>
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
