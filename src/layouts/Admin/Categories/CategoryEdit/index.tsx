import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import Alert from "../../../../components/Alert";
import LoadingButton from "../../../../components/LoadingButton";
import { useParams } from "react-router-dom";
import {
  getCategories,
  getCategory,
  updateCategory,
} from "../../../../api/Category";
import { CategoryValidation } from "../../../../validation/Category";
import {
  CategoryTypes,
  CategoryFormTypes,
} from "../../../../types/CategoryTypes";

const CategoryEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormTypes>({ resolver: yupResolver(CategoryValidation) });

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { categoryid } = useParams();
  const [currentCategory, setCurrentCategory] = useState<CategoryTypes | null>(
    null
  );
  const [categoryParentId, setCategoryParentId] = useState(0);

  useEffect(() => {
    getCategories().then((response) => setCategories(response.data));
  }, []);

  function defineCurrentCategory() {
    categories.forEach((category) => {
      if (category.id == categoryid) {
        setCurrentCategory(category);
        setCategoryParentId(category.parent_id);
      }
    });
  }

  useEffect(() => {
    defineCurrentCategory();
  }, [categoryid, categories]);

  const onSubmit: SubmitHandler<CategoryFormTypes> = (data) => {
    setIsLoading(true);

    updateCategory(currentCategory.id, data).then(function (response) {
      if (response.data === 1) {
        defineCurrentCategory();
        setAlertMessage("The category has been successfully updated");
      } else {
        setAlertMessage("An error has occurred");
        setAlertvariant("error");
      }
      setIsLoading(false);
    });
  };

  const [alertmessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] = useState("success");

  return (
    <S.Create>
      <Alert message={alertmessage} variant={alertvariant} />

      {currentCategory && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Group>
            <input
              type="text"
              placeholder="name"
              defaultValue={currentCategory.name}
              {...register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </S.Group>

          <S.Group>
            <select
              {...register("parent_id")}
              value={categoryParentId}
              onChange={(e: React.ChangeEvent) =>
                setCategoryParentId(+(e.target as HTMLInputElement).value)
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
