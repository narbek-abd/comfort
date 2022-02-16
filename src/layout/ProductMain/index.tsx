import React from 'react';
import * as G from "../../globalStyle";

import * as S from "./style";

interface ProductMainProps {
  link: any;
  hasChildren: boolean;
}

const ProductMain: React.FC<ProductMainProps> = () => {
  return (
    <S.ProductMain>
      <G.Container>
        <S.Inner>
        
        </S.Inner>
      </G.Container>
      
    </S.ProductMain>
  );
};

export default ProductMain;