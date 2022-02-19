import React, { useState, useEffect } from "react";
import * as G from "../../globalStyle";

import * as S from "./style";
import CartProductItem from "./CartProductItem";

const ShoppingCart: React.FC = () => {
  const [storageProducts, setStorageProducts] = useState([]);

  useEffect(() => {
    setStorageProducts(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  function productMutated(products: any) {
    setStorageProducts(products);
  }

  return (
    <S.ShoppingCart>
      <G.Container>
        <S.Inner>
          <S.Left>
            <S.ProductList>
              {storageProducts.map((storageProduct) => {
                console.log(storageProducts)
                return (
                  <CartProductItem
                    key={storageProduct.id}
                    storageProduct={storageProduct}
                    productMutated={productMutated}
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
