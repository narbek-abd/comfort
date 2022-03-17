import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import * as G from "../../../../globalStyle";
import * as S from "./style";
import {
  getCategoriesWithChildren,
  getCategory,
} from "../../../../api/Category";

type FormFields = {
  name: string;
  parend_id: number;
  price: number;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup
    .number()
    .typeError("you must specify a number")
    .required()
    .integer(),
});

const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormFields>({ resolver: yupResolver(validationSchema) });
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  const [categories, setCategories] = useState([]);
  const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    getCategoriesWithChildren().then((response) => {
      setCategories(response.data);
      setSelectList([{ level: 1, list: response.data }]);
    });
  }, []);

  function handleCategoryChange(e: React.ChangeEvent) {
    let selectedCategoryId = (e.target as HTMLInputElement).value;
    let selectLevel = +(e.target as HTMLInputElement).closest("select").dataset
      .level;

    getCategory(+selectedCategoryId).then((response) => {
      let selectedCategory = response.data;

      if (selectedCategory === undefined) return;

      let hasChildren = selectedCategory.children.length > 0;
      if (!hasChildren) {
        console.log("WOO");
        return;
      }

      let filteredSelectList = selectList.filter(
        (list) => list.level <= selectLevel
      );

      setSelectList([
        ...filteredSelectList,
        { level: ++selectLevel, list: selectedCategory.children },
      ]);
    });
  }

  return (
    <S.Create>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Group>
          <input type="text" placeholder="name" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </S.Group>

        <S.Group>
          <input type="text" placeholder="price" {...register("price")} />
          {errors.price && <span>{errors.price.message}</span>}
        </S.Group>

        {selectList.map((list) => {
          return (
            <S.Group key={list.level}>
              <select
                name="category_id"
                onChange={handleCategoryChange}
                data-level={list.level}
                defaultValue=""
              >
                <option value="" disabled>
                  Select category
                </option>
                {list.list.map((category: any) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </S.Group>
          );
        })}

        <S.Group>
          <G.Button type="submit">submit</G.Button>
        </S.Group>
      </form>
    </S.Create>
  );
};

export default ProductCreate;
