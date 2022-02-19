import React, { useState, useEffect } from "react";
import ProductMain from "../../layouts/ProductMain";

import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";

const Product: React.FC = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <Header />
      <S.Product>{product && <ProductMain product={product} />}</S.Product>;
    </>
  );
};

export default Product;
