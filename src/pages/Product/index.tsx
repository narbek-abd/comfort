import React, { useState, useEffect } from "react";
import ProductMain from "../../layouts/ProductMain";
import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";
import { getProduct } from '../../api/Product';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(+params.id).then(response => setProduct(response.data))
  }, []);

  return (
    <>
      <Header />
      {product && <ProductMain product={product} />};
    </>
  );
};

export default Product;
