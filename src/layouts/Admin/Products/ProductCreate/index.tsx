import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductValidation } from "validation";

import { ProductFormTypes } from "types/FormTypes";
import { UploadedImageTypes } from "types/ImageTypes";

import * as S from "./style";
import * as G from "globalStyle";

import ImageUpload from "components/ImageUpload";
import SelectNested, {listItem} from "components/SelectNested";
import Alert, { AlertProps } from "components/Alert";
import Button from "components/Button";
import api from "api";
import useIsMounted from "hooks/useIsMounted";

const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ProductFormTypes>({ resolver: yupResolver(ProductValidation) });
  const isMounted = useIsMounted();

  /** Категорий */
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [keyForReRender, setkeyForReRender] = useState(0);

  useEffect(() => {
    api.categories.getCategoriesWithChildren().then((response) => {
      isMounted() && setCategories(response.data);
    });
  }, [isMounted]);

  function onCategorySelectedWithNoChildren(category: listItem) {
    setSelectedCategory(category.id);
  }

  /** Изображение */
  const [productImages, setProductImages] = useState([]);

  function onUploadedImg(images: UploadedImageTypes[]) {
    setProductImages(images);
  }

  /** UI */
  const [alertMessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] =
    useState<AlertProps["variant"]>("success");
  const [isLoading, setIsLoading] = useState(false);

  /** Submit */
  const onSubmit: SubmitHandler<ProductFormTypes> = async (data) => {
    if (selectedCategory === 0) {
      setError("category_id", {
        message: "Error: select product category",
      });

      return;
    }

    if (productImages.length === 0) {
      setError("images", {
        message: "Error: upload product images",
      });

      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    productImages.forEach((imgItem) => {
      formData.append("images[]", imgItem.img);
    });
    formData.append("name", String(data.name));
    formData.append("price", String(data.price));
    formData.append("category_id", String(selectedCategory));
    formData.append("quantity", String(data.quantity));

    let response = api.products.createProduct(formData);
    if (!isMounted()) return;
    setIsLoading(false);

    reset();
    setAlertMessage("Product was created successfully");
    setSelectedCategory(0);
    setkeyForReRender((old) => ++old);
  };

  return (
    <S.Create>
      {alertMessage && <Alert variant={alertvariant}>{alertMessage}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Group>
          <input type="text" placeholder="name" {...register("name")} />
          {errors.name && <G.Err>{errors.name.message}</G.Err>}
        </S.Group>

        <S.Group>
          <input type="text" placeholder="price" {...register("price")} />
          {errors.price && <G.Err>{errors.price.message}</G.Err>}
        </S.Group>

        <S.Group>
          <input type="text" placeholder="quantity" {...register("quantity")} />
          {errors.quantity && <G.Err>{errors.quantity.message}</G.Err>}
        </S.Group>

        <S.Group>
          <S.SelectGroup>
            <SelectNested
              list={categories}
              name="category_id"
              desc="Select category"
              onSelected={onCategorySelectedWithNoChildren}
              keyForReRender={keyForReRender}
            />
          </S.SelectGroup>
          {errors.category_id && <G.Err>{errors.category_id.message}</G.Err>}
        </S.Group>

        <S.Group>
          <p style={{ marginBottom: "15px" }}>Select product images</p>
          <ImageUpload
            onUpload={onUploadedImg}
            keyForReRender={keyForReRender}
          />
          {errors.images && <G.Err>{errors.images.message}</G.Err>}
        </S.Group>

        <S.Group>
          <Button isLoading={isLoading}>Submit</Button>
        </S.Group>
      </form>
    </S.Create>
  );
};

export default ProductCreate;
