import React, { useState, useEffect } from "react";
import ProductMain from "layouts/ProductMain";
import Comments from "layouts/Comments";
import { useParams } from "react-router-dom";
import api from "api";
import Spinner from "components/Spinner";
import BreadCrumbs from "components/BreadCrumbs";
import * as G from "globalStyle";
import useIsMounted from "hooks/useIsMounted";
import { CategoryTypes } from "types/CategoryTypes";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useIsMounted();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.products.getProduct(+id).then((response) => {
      if (!isMounted()) return;

      setIsLoading(false);

      setProduct(response.data);
    });
  }, [id, isMounted]);

  const [customRoutes, setCustomRoutes] = useState([]);

  useEffect(() => {
    if (!product) return;

    let breadCrumbs = [
      {
        name: product.category.name,
        url: product.category.slug,
      },
    ];

    if (product.category.parent) {
      getParentCategories(product.category.parent);
    }

    function getParentCategories(parent: CategoryTypes) {
      breadCrumbs.unshift({ name: parent.name, url: parent.slug });

      if (parent.parent) {
        getParentCategories(parent.parent);
      }
    }

    breadCrumbs.unshift({ name: "Catalog", url: "catalog" });
    breadCrumbs.push({ name: product.name, url: "" });

    setCustomRoutes(breadCrumbs);
  }, [product]);

  return (
    <>
      <G.Container>
        {customRoutes.length > 0 && <BreadCrumbs routes={customRoutes} />}
      </G.Container>

      {isLoading && <Spinner style={{ marginTop: "60px" }} />}
      {product && <ProductMain product={product} />}
      {product && <Comments product_id={product.id} />}
    </>
  );
};

export default Product;
