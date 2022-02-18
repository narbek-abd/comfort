import React from "react";
import * as G from "../../globalStyle";

import * as S from "./style";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter";

const ShoppingCart: React.FC = () => {
  function onCountChange(count: number) {}

  return (
    <S.ShoppingCart>
      <G.Container>
        <S.Inner>
          <S.Left>
            <S.ProductList>
              <S.Product>
                <S.ProductImg>
                  <Link to="/">
                    <img
                      src="https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="product"
                    />
                  </Link>
                </S.ProductImg>
                <S.Inf>
                  <S.Name>
                    <Link to="/">Ut diam consequat</Link>
                  </S.Name>
                  <span>Color: Brown</span>
                  <span>Size: XL</span>
                </S.Inf>

                <S.Price>
                  <S.CurrentPrice>$32.00</S.CurrentPrice>
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
