import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import Alert, { AlertProps } from "../../../../components/Alert";
import Button from "../../../../components/Button";
import { useParams } from "react-router-dom";
import { CategoryValidation } from "../../../../validation";
import { CategoryTypes } from "../../../../types/CategoryTypes";
import { CategoryFormTypes } from "../../../../types/FormTypes";
import api from "../../../../api";
import useIsMounted from "../../../../hooks/useIsMounted";

const CategoryEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormTypes>({ resolver: yupResolver(CategoryValidation) });

  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useIsMounted();
  const [alertmessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] =
    useState<AlertProps["variant"]>("success");

  let { categoryid } = useParams();
  const [currentCategory, setCurrentCategory] = useState<CategoryTypes | null>(
    null
  );
  const [categoryParentId, setCategoryParentId] = useState(0);

  useEffect(() => {
    api.categories.getCategories().then((response) => {
      isMounted() && setCategories(response.data);
    });
  }, [isMounted]);

  function defineCurrentCategory() {
    categories.forEach((category) => {
      if (category.id == categoryid) {
        setCurrentCategory(category);
        setCategoryParentId(category.parent_id ?? 0);
      }
    });
  }

  useEffect(() => {
    defineCurrentCategory();
  }, [categoryid, categories]);

  const onSubmit: SubmitHandler<CategoryFormTypes> = async (data) => {
    setIsLoading(true);

    try {
      api.categories.updateCategory(currentCategory.id, data);
      defineCurrentCategory();
      setAlertMessage("The category has been successfully updated");
    } catch (err: any) {
      setAlertMessage("An error has occurred");
      setAlertvariant("error");
    }

    setIsLoading(false);
  };

  return (
    <S.Create>
      {alertmessage && <Alert variant={alertvariant}>{alertmessage}</Alert>}

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

          <Button isLoading={isLoading}>Submit</Button>
        </form>
      )}
    </S.Create>
  );
};

export default CategoryEdit;
