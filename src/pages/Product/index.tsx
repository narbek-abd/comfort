import React, { useState, useEffect } from "react";
import ProductMain from "../../layouts/ProductMain";
import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <Header />
      {product && <ProductMain product={product} />};
    </>
  );
};

export default Product;
