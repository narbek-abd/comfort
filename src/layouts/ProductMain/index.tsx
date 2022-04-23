import React, { useState, useEffect } from "react";
import * as G from "../../globalStyle";
import ProductGallery from "../../components/ProductGallery";

import * as S from "./style";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/redusers";
import { addProduct } from "../../store/action-creators/Cart";
import { addProductToWishlist } from "../../store/action-creators/Wishlist";
import { ProductTypes } from "../../types/ProductTypes";

interface ProductMainProps {
  product: ProductTypes;
}

const ProductMain = ({ product }: ProductMainProps) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const wishlistProducts = useSelector(
    (state: RootState) => state.wishlist.products
  );

  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [alreadyInWishlist, setAlreadyInWishlist] = useState(false);

  useEffect(() => {
    cartProducts.forEach((cartProduct) => {
      if (cartProduct.id === product.id) {
        setAlreadyInCart(true);
      }
    });
  }, [cartProducts]);

  useEffect(() => {
    wishlistProducts.forEach((wishlistProduct) => {
      if (wishlistProduct.id === product.id) {
        setAlreadyInWishlist(true);
      }
    });
  }, [wishlistProducts]);

  function addToCart(e: React.MouseEvent) {
    dispatch(addProduct(product));

    setAlreadyInCart(true);
  }

  function addToWishlist() {
    dispatch(addProductToWishlist(product));

    setAlreadyInWishlist(true);
  }

  return (
    <S.ProductMain>
      <G.Container>
        <S.Inner>
          <S.Left>
            {product.images && <ProductGallery imageItems={product.images} />}
          </S.Left>
          <S.Right>
            <S.Name>{product.name}</S.Name>

            <S.Rating>
              <S.Stars>⭐️⭐️⭐️⭐️⭐️</S.Stars>

              <span>(55)</span>
            </S.Rating>

            <S.Price>
              {product.price}
              <span>$40.00</span>
            </S.Price>

            <S.Color>
              <span>Quantity: </span>
              <span>{product.quantity}</span>
            </S.Color>

            <S.Desc>{product.description}</S.Desc>

            <S.Actions>
              <Button onClick={addToCart} disabled={alreadyInCart}>
                {alreadyInCart ? "Added to Cart" : "Add To Cart"}
              </Button>

              <S.Like>
                <Button
                  onClick={addToWishlist}
                  disabled={alreadyInWishlist}
                  variant="outlined"
                  color="blue"
                >
                  <Icon name="heart" />
                </Button>
              </S.Like>
            </S.Actions>

            <S.Categories>
              <p>Category:</p>
              <div>
                <Link to={`/catalog/${product.category.slug}`}>
                  {product.category.name}
                </Link>
              </div>
            </S.Categories>
          </S.Right>
        </S.Inner>
      </G.Container>
    </S.ProductMain>
  );
};

export default ProductMain;
