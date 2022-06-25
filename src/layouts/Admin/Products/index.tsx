import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Pagination from "../../../components/Pagination";
import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import { ProductTypes } from "../../../types/ProductTypes";
import Spinner from "../../../components/Spinner";
import useIsMounted from "../../../hooks/useIsMounted";
import api from "../../../api";

const Products = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const [searchParams] = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);
  const isMounted = useIsMounted();

  const perPage = 6;
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    getProducts();
  }, [searchParams, isMounted]);

  async function getProducts() {
    let response = await api.products.getProducts(
      `?limit=${perPage}&page=${currentPage}`
    );
    if (!isMounted()) return;

    setProducts(response.data.data);
    setTotalItems(response.data.total);
  }

  return products.length > 0 ? (
    <S.Products>
      <S.ProductsList>
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
      </S.ProductsList>

      {totalItems !== 0 && (
        <Pagination totalItem={totalItems} perPage={perPage} />
      )}
    </S.Products>
  ) : (
    <Spinner />
  );
};

export default Products;
