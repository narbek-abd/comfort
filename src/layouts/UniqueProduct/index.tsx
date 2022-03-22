import React from "react";
import * as S from "./style";
import * as G from "../../globalStyle";
import unique from "../../assets/img/unique-product.jpg";
import { Button } from "../../components/Button";

const UniqueProduct = () => {
  return (
    <S.UniqueProduct>
      <G.Container>
        <S.Inner>
          <S.Left>
            <img src={unique} alt="unique product" />
          </S.Left>

          <S.Right>
            <G.SectionTitle>
              Unique Features Of leatest & Trending Poducts
            </G.SectionTitle>

            <ul>
              <li>All frames constructed with hardwood solids and laminates</li>
              <li>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li>Arms, backs and seats are structurally reinforced</li>
            </ul>

            <Button>Add To Cart</Button>
          </S.Right>
        </S.Inner>
      </G.Container>
    </S.UniqueProduct>
  );
};

export default UniqueProduct;
