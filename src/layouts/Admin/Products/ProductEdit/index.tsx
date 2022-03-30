import React, { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductValidation } from "../../../../validation/Product";

import { ProductFormTypes, ProductTypes } from "../../../../types/ProductTypes";
import { CategoryTypes } from "../../../../types/CategoryTypes";
import { UploadedImageTypes } from "../../../../types/ImageTypes";

import * as S from "./style";
import * as G from "../../../../globalStyle";

import { getCategoriesWithChildren } from "../../../../api/Category";
import { updateProduct, deleteProductImage } from "../../../../api/Product";

import ImageUpload from "../../../../components/ImageUpload";
import SelectNested from "../../../../components/SelectNested";
import Alert from "../../../../components/Alert";
import Button from "../../../../components/Button";

import { getProduct } from "../../../../api/Product";
import { useParams } from "react-router-dom";
import Spinner from "../../../../components/Spinner";

const ProductEdit = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ProductFormTypes>({ resolver: yupResolver(ProductValidation) });

  let { productid } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductTypes | null>(
    null
  );

  useEffect(() => {
    getProduct(+productid).then((response) => {
      if (response.status == 200) {
        setCurrentProduct(response.data);
        setInitialProductImages(response.data.images ?? []);
      }
    });
  }, []);

  /** Категорий */
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [keyForReRender, setkeyForReRender] = useState(0);

  useEffect(() => {
    getCategoriesWithChildren().then((response) => {
      setCategories(response.data);
    });
  }, []);

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
    deleteProductImage(id).then((response) => {
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
  const [alertvariant, setAlertvariant] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  /** Submit */
  const onSubmit: SubmitHandler<ProductFormTypes> = (data) => {
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

    if (categorySelectIsVisible) {
      formData.append("category_id", String(selectedCategory));
    }

    updateProduct(currentProduct.id, formData).then((response) => {
      setIsLoading(false);

      if (response.status === 200) {
        setAlertMessage("Category was updated successfully");

        setCurrentProduct(response.data);
        setInitialProductImages(response.data.images ?? []);
        setkeyForReRender((old) => ++old);
        setCtegorySelectIsVisible(false);
      }
    });
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
