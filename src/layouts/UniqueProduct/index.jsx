import React from 'react';
import { SButton, SContainer, SectionTitle } from "../../globalStyle";
import unique from "../../assets/img/unique-product.jpg";

import {
  SUniqueProduct,
  SInner,
  SLeft,
SRight,
} from "./style";

const UniqueProduct = () => {
  return (
    <SUniqueProduct>
      <SContainer>
        <SInner>
          <SLeft>
            <img src={unique} alt="unique product" />
          </SLeft>

          <SRight>
            <SectionTitle>Unique Features Of leatest & Trending Poducts</SectionTitle>

            <ul>
              <li>All frames constructed with hardwood solids and laminates</li>
              <li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
              <li>Arms, backs and seats are structurally reinforced</li>
            </ul>

            <SButton>Add To Cart</SButton>
          </SRight>
        </SInner>
      </SContainer>
      
    </SUniqueProduct>
  );
};

export default UniqueProduct;