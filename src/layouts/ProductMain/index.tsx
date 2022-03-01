import React, { useState, useEffect } from "react";
import * as G from "../../globalStyle";
import ProductGallery from "../../components/ProductGallery";

import * as S from "./style";
import { Icon } from "../../components/Icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/redusers";
import { addProduct } from "../../store/action-creators/Cart";

interface ProductMainProps {
  product: {
    [key: string]: any;
  };
}

const ProductMain = ({ product }: ProductMainProps) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  useEffect(() => {
    cartProducts.forEach((cartProduct: any) => {
      if (cartProduct.id === product.id) {
        setAlreadyInCart(true);
      }
    });
  }, []);

  function addToCart(e: React.MouseEvent) {
    dispatch(addProduct(product));

    setAlreadyInCart(true);
  }

  return (
    <S.ProductMain>
      <G.Container>
        <S.Inner>
          <S.Left>
            {product.images && <ProductGallery imgLinks={product.images} />}
          </S.Left>
          <S.Right>
            <S.Name>{product.title}</S.Name>

            <S.Rating>
              <S.Stars>⭐️⭐️⭐️⭐️⭐️</S.Stars>

              <span>({product.stock})</span>
            </S.Rating>

            <S.Price>
              {product.price}
              <span>$40.00</span>
            </S.Price>

            <S.Color>
              <p>Color</p>

              <div>
                <span></span>
              </div>
            </S.Color>

            <S.Desc>{product.description}</S.Desc>

            <S.Actions>
              <G.Button onClick={addToCart} disabled={alreadyInCart}>
                {alreadyInCart ? "Added to Cart" : "Add To Cart"}
              </G.Button>

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
