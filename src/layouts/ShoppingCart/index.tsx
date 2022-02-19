import React, { useState, useEffect } from "react";
import * as G from "../../globalStyle";

import * as S from "./style";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter";

const ShoppingCart: React.FC = () => {
  const [cartProducts, setProducts] = useState([]);

  useEffect(() => {
    let storageProducts: any = JSON.parse(localStorage.getItem("cart")) || [];

    storageProducts.forEach((product: any) => {
      fetch(`https://dummyjson.com/products/${product.id}`)
        .then((response) => response.json())
        .then((json) =>
          setProducts((cartProducts: any) => [...cartProducts, json])
        );
    });
  }, []);

  function onCountChange(count: number) {
  //   let products: any = JSON.parse(localStorage.getItem("cart")) || [];
    
  //   let productExists = products.find((productItem: any) => productItem.id == product.id)
  //   if(productExists) return;

  //   products.push({id: product.id, quantity: 1})
  //   localStorage.setItem('cart', JSON.stringify(products));
  }

  return (
    <S.ShoppingCart>
      <G.Container>
        <S.Inner>
          <S.Left>
            <S.ProductList>
              {cartProducts.map((product) => {
                return (
                  <S.Product key={product.id}>
                    <S.ProductImg>
                      <Link to="/">
                        <img
                          src={product.images[0]}
                          alt="product"
                        />
                      </Link>
                    </S.ProductImg>
                    <S.Inf>
                      <S.Name>
                        <Link to="/">{product.name}</Link>
                      </S.Name>
                      <span>Color: Brown</span>
                      <span>Size: XL</span>
                    </S.Inf>

                    <S.Price>
                      <S.CurrentPrice>{product.price}</S.CurrentPrice>
                      <S.Count>
                        <Counter
                          min={0}
                          max={15}
                          current={1}
                          onChange={onCountChange}
                        />
                      </S.Count>

                      <S.Total>£219.00</S.Total>
                    </S.Price>
                  </S.Product>
                );
              })}
            </S.ProductList>

            <G.Button>Clear Curt</G.Button>
          </S.Left>
          <S.Right></S.Right>
        </S.Inner>
      </G.Container>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
