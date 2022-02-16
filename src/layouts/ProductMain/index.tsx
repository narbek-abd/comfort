import React from 'react';
import * as G from "../../globalStyle";
import ProductGallery from "../../components/ProductGallery";

import * as S from "./style";

interface ProductMainProps {
}

const ProductMain: React.FC<ProductMainProps> = () => {
  return (
    <S.ProductMain>
      <G.Container>
        <S.Left>
          <ProductGallery images={images}/>
        </S.Left>
        <S.Right>
        ssdas
        </S.Right>
      </G.Container>
      
    </S.ProductMain>
  );
};

const images = [
  { id: 1, url: 'https://images.pexels.com/photos/7863536/pexels-photo-7863536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', main: true},
  { id: 2, url: 'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 3, url: 'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 4, url: 'https://images.pexels.com/photos/7606067/pexels-photo-7606067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  { id: 5, url: 'https://images.pexels.com/photos/8003996/pexels-photo-8003996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
];

export default ProductMain;