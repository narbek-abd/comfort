import React, { useState, useEffect } from "react";
import ProductMain from "../../layouts/ProductMain";
import Comments from "../../layouts/Comments";
import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";
import { getProduct, getProductComments } from "../../api/Product";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(+params.id).then((response) => setProduct(response.data));
  }, []);

  return (
    <>
      <Header />
      {product && <ProductMain product={product} />}
      {product && <Comments product_id={product.id} />}
    </>
  );
};

export default Product;
