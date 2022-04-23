import React, { useState, useEffect } from "react";

import * as G from "../../globalStyle";
import * as S from "./style";

import { ProductTypes } from "../../types/ProductTypes";
import { CategoryTypes } from "../../types/CategoryTypes";

import { useLocation, useSearchParams } from "react-router-dom";

import Spinner from "../../components/Spinner";
import Alert from "../../components/Alert";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import Modal from "../../components/Modal";

import ProductsSort from "./ProductsSort";
import ProductsFilterSidebar from "./ProductsFilterSidebar";

import { getChildrenIds } from "../../utils/getChildrenIds";
import api from "../../api";
import useIsMounted from "../../hooks/useIsMounted";
import useMediaQuery from "../../hooks/useMediaQuery";

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState(null);
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const isMounted = useIsMounted();

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(0);

  const [categoryChildrens, setCategoryChildrens] = useState([]);

  const [productsCardView, setProductsCardView] = useState<
    "vertical" | "horizontal"
  >("horizontal");

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);

    let locationArray = location.pathname.replace(/\/$/, "").split("/");
    let currentCategorySlug = locationArray[locationArray.length - 1];

    if (currentCategorySlug === "catalog") {
      api.categories.getCategoriesWithChildren().then((response) => {
        if (!isMounted()) return;

        setCategoryChildrens(response.data);
        getProducts();
      });
    } else {
      api.categories.getCategoryBySlug(currentCategorySlug).then((response) => {
        if (!isMounted()) return;

        setCategoryChildrens(response.data.children);

        let categoriesIds = getSubCategoryIds(response.data);
        getProducts(categoriesIds);
      });
    }
  }, [searchParams.toString(), location, isMounted]);

  async function getProducts(categoryIds: string = "") {
    let sortBy = defaultSortBy();

    try {
      let response = await api.products.getProducts(
        `?limit=${perPage}&${sortBy}&${categoryIds}&${searchParams.toString()}`
      );

      if (!isMounted()) return;
      setIsLoading(false);
      let products = response.data.data;

      if (products.length === 0) {
        setProducts([]);
        setAlertMessage("List is empty");
        return;
      }
      setProducts(products);
      setTotalItems(response.data.total);
      setAlertMessage("");
    } catch (err: any) {
      setIsLoading(false);
      setAlertMessage("Something went wrong, try later");
    }
  }

  function getSubCategoryIds(currentCategory: CategoryTypes) {
    let categories = "";

    if (!searchParams.get("categories")) {
      let currentCategoryId = currentCategory.id;
      let categoryIds = getChildrenIds(currentCategory.children);
      categoryIds.push(currentCategoryId);

      let categoryIdsJoined = categoryIds.join("-");

      categories = `categories=${categoryIdsJoined}`;
    }

    return categories;
  }

  function defaultSortBy() {
    let sortBy = "";

    if (!searchParams.get("sort_by")) {
      sortBy = "sort_by=new";
    }

    return sortBy;
  }

  function changeView(selectedView: "vertical" | "horizontal") {
    setProductsCardView(selectedView);
  }

  const isDeskTop = useMediaQuery("(min-width: 992px)");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openFilterModal() {
    setModalIsOpen(true);
  }

  function closeFilterModal() {
    setModalIsOpen(false);
  }

  return (
    <S.ProductsList>
      <G.Container>
        <ProductsSort
          changeView={changeView}
          isDeskTop={isDeskTop}
          openFilterModal={openFilterModal}
        />

        <S.ProductsBox>
          {isDeskTop ? (
            <ProductsFilterSidebar categoryChildrens={categoryChildrens} />
          ) : (
            <Modal
              isOpen={modalIsOpen}
              onClose={closeFilterModal}
              fullscreen={true}
            >
              <ProductsFilterSidebar categoryChildrens={categoryChildrens} />
              <G.Close onClick={closeFilterModal}>x</G.Close>
            </Modal>
          )}

          <S.List variant={productsCardView}>
            {products.length > 0 &&
              products.map((product: ProductTypes) => {
                return (
                  <ProductCard
                    variant={productsCardView}
                    key={product.id}
                    product={product}
                  />
                );
              })}

            {alertMessage && <Alert variant="error">{alertMessage}</Alert>}
            {isLoading && <Spinner />}
          </S.List>
        </S.ProductsBox>
        
        {totalItems !== 0 && (
          <Pagination totalItem={totalItems} perPage={perPage} />
        )}
      </G.Container>
    </S.ProductsList>
  );
};

export default ProductsList;
