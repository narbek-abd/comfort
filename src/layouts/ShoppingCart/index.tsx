import React, { useState, useEffect } from "react";
import * as G from "globalStyle";
import * as S from "./style";

import CartProductItem from "./CartProductItem";
import { useSelector } from "react-redux";
import { RootState } from "store/redusers";
import Button from "components/Button";
import { Link } from "react-router-dom";
import Alert from "components/Alert";
import { getChildrenIds } from "utils/getChildrenIds";
import api from "api";
import Spinner from "components/Spinner";
import useIsMounted from "hooks/useIsMounted";

const ShoppingCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const isMounted = useIsMounted();

  const [products, setProducts] = useState([]);
  let cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (cart.products.length === 0) {
      setIsLoading(false);
      setAlertMessage("Cart is empty");
      setProducts([]);
    }
  }, [cart]);

  useEffect(() => {
    let ids = getChildrenIds(cart.products);

    api.products.getProductsByIds(ids).then((response) => {
      if (!isMounted()) return;

      setIsLoading(false);
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setAlertMessage("Something wend wrong");
      }
    });
  }, [isMounted]);

  return (
    <S.ShoppingCart>
      <G.Container>
        {isLoading && <Spinner />}
        {alertMessage && <Alert variant="warning">{alertMessage}</Alert>}

        <S.ProductList>
          {products.map((product) => {
            return <CartProductItem key={product.id} product={product} />;
          })}

          {cart.products.length !== 0 && !isLoading && (
            <Link to="/order">
              <Button>Buy</Button>
            </Link>
          )}
        </S.ProductList>
      </G.Container>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
