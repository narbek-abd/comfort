import React from "react";
import * as G from "../../globalStyle";
import ProductGallery from "../../components/ProductGallery";

import * as S from "./style";
import { Icon } from "../../components/Icon";
import { Link } from "react-router-dom";

interface ProductMainProps {}

const ProductMain: React.FC<ProductMainProps> = () => {
  return (
    <S.ProductMain>
      <G.Container>
        <S.Inner>
          <S.Left>
            <ProductGallery images={images} />
          </S.Left>
          <S.Right>
            <S.Name>Playwood arm chair</S.Name>

            <S.Rating>
              <S.Stars>⭐️⭐️⭐️⭐️⭐️</S.Stars>

              <span>(22)</span>
            </S.Rating>

            <S.Price>
              $32.00
              <span>$40.00</span>
            </S.Price>

            <S.Color>
              <p>Color</p>

              <div>
                <span></span>
              </div>
            </S.Color>

            <S.Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </S.Desc>

            <S.Actions>
              <G.Button>Add To Cart</G.Button>

              <S.Like>
                <Icon name="heart" />
              </S.Like>
            </S.Actions>

            <S.Categories>
              <p>Categories:</p>
              <div>
                <Link to="/">Chairs</Link>
              </div>
            </S.Categories>

            <S.Tags>
              <p>Tags:</p>
              <div>
                <Link to="/">Chairs</Link>
              </div>
            </S.Tags>
          </S.Right>
        </S.Inner>
      </G.Container>
    </S.ProductMain>
  );
};

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/7863536/pexels-photo-7863536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    main: true,
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/7606067/pexels-photo-7606067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/8003996/pexels-photo-8003996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default ProductMain;