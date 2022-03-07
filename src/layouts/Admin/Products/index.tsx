import React from 'react';

import * as S from "./style";

interface ProductsProps {
  children?: React.ReactNode;
}

const Products = ({children} : ProductsProps) => {
  return (
    <S.Products>
        <S.Inner>
        
        </S.Inner>
      
    </S.Products>
  );
};

export default Products;