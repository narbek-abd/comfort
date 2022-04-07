import React, { useState, useEffect } from "react";
import * as G from "../../globalStyle";

import * as S from "./style";
import CartProductItem from "./CartProductItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redusers";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [storageProducts, setStorageProducts] = useState([]);
  let cart = useSelector((state: RootState) => state.cart);


  useEffect(() => {
    setStorageProducts(cart.products);
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

              <Link to="/order">
                <Button>
                  Buy
                </Button>
              </Link>
          </S.Left>
          <S.Right></S.Right>
        </S.Inner>
      </G.Container>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
