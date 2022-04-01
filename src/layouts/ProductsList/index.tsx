import React, { useState, useEffect } from "react";

import * as G from "../../globalStyle";
import * as S from "./style";

import { ProductTypes } from "../../types/ProductTypes";

import { useSearchParams } from "react-router-dom";

import axios from "axios";

import Spinner from "../../components/Spinner";
import Alert from "../../components/Alert";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import Modal from "../../components/Modal";

import ProductsSort from "./ProductsSort";
import ProductsFilterSidebar from "./ProductsFilterSidebar";

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState(null);
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const [searchParams] = useSearchParams();

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(null);

  const [productsCardView, setProductsCardView] = useState<
    "vertical" | "horizontal"
  >("horizontal");

  useEffect(() => {
    let sortBy = "";

    if (!searchParams.get("sort_by")) {
      sortBy = "sort_by=new";
    }

    axios
      .get(
        `http://comfort.loc/api/products/list?limit=${perPage}&${searchParams.toString()}&${sortBy}`
      )
      .then(function (response) {
        setIsLoading(false);

        if (response.status === 200) {
          let products = response.data.data;

          if (products.length === 0) {
            setAlertMessage("List is empty");
            return;
          }
          setProducts(products);
          setTotalItems(response.data.total);
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        setAlertMessage("Something went wrong, try later");
      });
  }, [searchParams.toString()]);

  function changeView(selectedView: "vertical" | "horizontal") {
    setProductsCardView(selectedView);
  }

  const [isDeskTop, setIsDeskTop] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setIsDeskTop(false);
    }
  }, []);

  const mediaQueryList = window.matchMedia("(max-width: 992px)");
  mediaQueryList.addEventListener("change", (event) => {
    if (event.matches) {
      setIsDeskTop(false);
    } else {
      setIsDeskTop(true);
    }
  });

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
            <ProductsFilterSidebar />
          ) : (
            <Modal
              isOpen={modalIsOpen}
              onClose={closeFilterModal}
              fullscreen={true}
            >
              <ProductsFilterSidebar />
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
        {totalItems && <Pagination totalItem={totalItems} perPage={perPage} />}
      </G.Container>
    </S.ProductsList>
  );
};

export default ProductsList;
