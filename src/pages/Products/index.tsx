import React from "react";
import ProductsList from "layouts/ProductsList";
import BreadCrumbs from "components/BreadCrumbs";
import * as G from "globalStyle";

const Products = () => {
  
  return (
    <>
      <G.Container>
        <BreadCrumbs />
      </G.Container>

      <ProductsList />
    </>
  );
};

export default Products;
