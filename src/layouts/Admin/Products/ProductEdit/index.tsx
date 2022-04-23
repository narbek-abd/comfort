import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductValidation } from "../../../../validation";

import { ProductFormTypes } from "../../../../types/FormTypes";
import { ProductTypes } from "../../../../types/ProductTypes";

import { CategoryTypes } from "../../../../types/CategoryTypes";
import { UploadedImageTypes } from "../../../../types/ImageTypes";

import * as S from "./style";
import * as G from "../../../../globalStyle";

import ImageUpload from "../../../../components/ImageUpload";
import SelectNested from "../../../../components/SelectNested";
import Alert, { AlertProps } from "../../../../components/Alert";
import Button from "../../../../components/Button";

import { useParams } from "react-router-dom";
import Spinner from "../../../../components/Spinner";
import api from "../../../../api";
import useIsMounted from "../../../../hooks/useIsMounted";

const ProductEdit = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ProductFormTypes>({ resolver: yupResolver(ProductValidation) });

  let { productid } = useParams();
  const isMounted = useIsMounted();
  const [currentProduct, setCurrentProduct] = useState<ProductTypes | null>(
    null
  );

  useEffect(() => {
    api.products.getProduct(+productid).then((response) => {
      if (response.status == 200 && isMounted()) {
        setCurrentProduct(response.data);
        setInitialProductImages(response.data.images ?? []);
      }
    });
  }, [isMounted]);

  /** Категорий */
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [keyForReRender, setkeyForReRender] = useState(0);

  useEffect(() => {
    api.categories.getCategoriesWithChildren().then((response) => {
      isMounted() && setCategories(response.data);
    });
  }, [isMounted]);

  function onCategorySelectedWithNoChildren(category: CategoryTypes) {
    setSelectedCategory(category.id);
  }

  /** Локальные изображения */
  const [productImages, setProductImages] = useState([]);

  function onUploadedImg(images: UploadedImageTypes[]) {
    setProductImages(images);
  }

  /** Изображения с сервера */
  const [initialProductImages, setInitialProductImages] = useState([]);

  function removeInitialImage(id: number) {
    api.products.deleteProductImage(id).then((response) => {
      if (response.data === 1) {
        let filteredImageList = initialProductImages.filter(
          (image) => image.id !== id
        );
        setInitialProductImages(filteredImageList);
      }
    });
  }

  /** UI */
  const [alertMessage, setAlertMessage] = useState("");
  const [alertvariant, setAlertvariant] =
    useState<AlertProps["variant"]>("success");
  const [isLoading, setIsLoading] = useState(false);

  /** Submit */
  const onSubmit: SubmitHandler<ProductFormTypes> = async (data) => {
    if (selectedCategory === 0 && categorySelectIsVisible) {
      setError("category_id", {
        message: "Select category",
      });

      return;
    }

    if (productImages.length + initialProductImages.length === 0) {
      setError("images", {
        message: "Upload product images",
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
    formData.append("quantity", String(data.quantity));

    if (categorySelectIsVisible) {
      formData.append("category_id", String(selectedCategory));
    }

    let response = await api.products.updateProduct(
      currentProduct.id,
      formData
    );
    if (!isMounted()) return;
    setIsLoading(false);

    setAlertMessage("Product was updated successfully");

    setCurrentProduct(response.data);
    setInitialProductImages(response.data.images ?? []);
    setkeyForReRender((old) => ++old);
    setCtegorySelectIsVisible(false);
  };

  const [categorySelectIsVisible, setCtegorySelectIsVisible] = useState(false);

  function showCategorySelect() {
    setCtegorySelectIsVisible(true);
  }

  return (
    <S.Edit>
      {alertMessage && <Alert variant={alertvariant}>{alertMessage}</Alert>}

      {currentProduct ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Group>
            <input
              defaultValue={currentProduct.name}
              type="text"
              placeholder="name"
              {...register("name")}
            />
            {errors.name && <G.Err>{errors.name.message}</G.Err>}
          </S.Group>

          <S.Group>
            <input
              defaultValue={currentProduct.price}
              type="text"
              placeholder="price"
              {...register("price")}
            />
            {errors.price && <G.Err>{errors.price.message}</G.Err>}
          </S.Group>

          <S.Group>
            <input
              defaultValue={currentProduct.quantity}
              type="text"
              placeholder="quantity"
              {...register("quantity")}
            />
            {errors.quantity && <G.Err>{errors.quantity.message}</G.Err>}
          </S.Group>

          <S.Group>
            <S.SelectGroup>
              {categorySelectIsVisible ? (
                <SelectNested
                  list={categories}
                  name="category_id"
                  desc="Select category"
                  onSelected={onCategorySelectedWithNoChildren}
                  keyForReRender={keyForReRender}
                />
              ) : (
                <S.CategoryInf>
                  <p>Category name: {currentProduct.category.name}</p>
                  <Button size="small" onClick={showCategorySelect}>
                    Change category
                  </Button>
                </S.CategoryInf>
              )}
            </S.SelectGroup>
            {errors.category_id && <G.Err>{errors.category_id.message}</G.Err>}
          </S.Group>

          <S.Group>
            <p style={{ marginBottom: "15px" }}>Select product images</p>
            <ImageUpload
              onUpload={onUploadedImg}
              initialImages={initialProductImages}
              onRemoveInitialImage={removeInitialImage}
              keyForReRender={keyForReRender}
            />
            {errors.images && <G.Err>{errors.images.message}</G.Err>}
          </S.Group>

          <S.Group>
            <Button isLoading={isLoading}>Submit</Button>
          </S.Group>
        </form>
      ) : (
        <Spinner />
      )}
    </S.Edit>
  );
};

export default ProductEdit;
