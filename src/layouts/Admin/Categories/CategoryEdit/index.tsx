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
import { useParams } from "react-router-dom";

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

const CategoryEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { categoryid } = useParams();
  const [currentCategory, setCurrentCategory] = useState<any>({});

  useEffect(() => {
    getCurrentCategory();
  }, []);

  function getCurrentCategory() {
    axios
      .get(`http://comfort.loc/api/categories/${categoryid}`)
      .then(function (response) {
        setCurrentCategory(response.data);
      });
  }

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setIsLoading(true);

    axios
      .put(`http://comfort.loc/api/categories/${currentCategory.id}`, {
        name: data.name,
        parent_id: data.parent_id,
      })
      .then(function (response) {
        if (response.data === 1) {
          getCurrentCategory();
        }
        setAlertMessage("Category was updated successfully");
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

  useEffect(() => {
    setCategoryParentId(currentCategory.parent_id);
  }, [currentCategory]);

  const [categoryParentId, setCategoryParentId] = useState(null);
  return (
    <S.Create>
      <Alert message={alertmessage} variant={alertvariant} />

      {currentCategory.id && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Group>
            <input
              type="text"
              placeholder="name"
              defaultValue={currentCategory.name}
              {...register("name", { required: true })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </S.Group>

          <S.Group>
            <select
              {...register("parent_id", { required: true })}
              value={categoryParentId}
              onChange={(e: React.ChangeEvent) =>
                setCategoryParentId((e.target as HTMLInputElement).value)
              }
            >
              <option value="">no parent category</option>
              {categories.map((category) => {
                if (category.id !== currentCategory.id) {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                }
              })}
            </select>
            {errors.parent_id && <span>{errors.parent_id.message}</span>}
          </S.Group>

          <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
        </form>
      )}
    </S.Create>
  );
};

export default CategoryEdit;
