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

import ProductsSort from "./ProductsSort";
import ProductsFilterSidebar from "./ProductsFilterSidebar";

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState(null);
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const [searchParams] = useSearchParams();

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://comfort.loc/api/products/list?limit=${perPage}&${searchParams.toString()}`
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
  }, [searchParams]);

  return (
    <S.ProductsList>
      <G.Container>
        <ProductsSort />

        <S.ProductsBox>
          <ProductsFilterSidebar />

          <S.List>
            {products.length > 0 &&
              products.map((product: ProductTypes) => {
                return <ProductCard key={product.id} product={product} />;
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
