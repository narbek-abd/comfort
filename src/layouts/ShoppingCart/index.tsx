import React, { useState, useEffect } from "react";
import * as G from "../../globalStyle";

import * as S from "./style";
import CartProductItem from "./CartProductItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redusers";

const ShoppingCart = () => {
  const [storageProducts, setStorageProducts] = useState([]);
  let cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setStorageProducts(JSON.parse(cart.products));
  }, [cart]);

  return (
    <S.ShoppingCart>
      <G.Container>
        <S.Inner>
          <S.Left>
            <S.ProductList>
              {storageProducts.map((storageProduct) => {
                return (
                  <CartProductItem
                    key={storageProduct.id}
                    storageProduct={storageProduct}
                  />
                );
              })}

              {storageProducts.length == 0 && (
                <S.CartEmpty>Корзина пуста</S.CartEmpty>
              )}
            </S.ProductList>

            {storageProducts.length > 0 && <G.Button>Clear Curt</G.Button>}
          </S.Left>
          <S.Right></S.Right>
        </S.Inner>
      </G.Container>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
