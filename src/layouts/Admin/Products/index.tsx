import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Pagination from "../../../components/Pagination";
import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import { ProductTypes } from "../../../types/ProductTypes";
import Spinner from "../../../components/Spinner";

const Products = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const [searchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(null);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function getProducts() {
    axios
      .get(
        `http://comfort.loc/api/products/list?limit=${perPage}&page=` +
          currentPage
      )
      .then(function (response) {
        setProducts(response.data.data);
        setTotalItems(response.data.total);
      });
  }

  return products.length > 0 ? (
    <S.Products>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: ProductTypes) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                onDelete={getProducts}
              />
            );
          })}
        </tbody>
      </table>

      {totalItems && <Pagination totalItem={totalItems} perPage={perPage} />}
    </S.Products>
  ) : (
    <Spinner />
  );
};

export default Products;
