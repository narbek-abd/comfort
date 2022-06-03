import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Counter from "../../../components/Counter";
import {
  removeFromCart,
  changeProductCount,
} from "../../../store/action-creators/Cart";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../../constants/project";
import { ProductTypes } from "../../../types/ProductTypes";
import { RootState } from "../../../store/redusers";

interface CartProductItemProps {
  product: ProductTypes;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  const dispatch = useDispatch();
  const [localProduct, setLocalProduct] = useState(null);

  let cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    let localProduct = cart.products.find(
      (localProduct) => localProduct.id === product.id
    );

    setLocalProduct(localProduct);
  }, [cart]);

  function onCountChange(count: number) {
    dispatch(changeProductCount(product.id, count));
  }

  function removeProduct() {
    dispatch(removeFromCart(product.id));
  }

  return localProduct ? (
    <S.CartProductItem>
      <S.ProductImg>
        <Link to="/">
          <img
            src={apiUrl + "/storage/" + product.images[0].image}
            alt="product"
          />
        </Link>
      </S.ProductImg>
      <S.Inf>
        <S.Name>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </S.Name>
        <span>Category: <Link to={`/catalog/${product.category.slug}`}>{product.category.name}</Link></span>
        <span>Size: XL</span>
      </S.Inf>

      <S.Price>
        <S.CurrentPrice>{product.price}</S.CurrentPrice>
        <S.Count>
          <Counter
            min={1}
            max={product.quantity}
            current={localProduct.quantity}
            onChange={onCountChange}
          />
        </S.Count>

        <S.Total>{product.price * localProduct.quantity}</S.Total>
      </S.Price>

      <S.RemoveProductBtn onClick={removeProduct} data-testid="shoppingCart-remove-btn">X</S.RemoveProductBtn>
    </S.CartProductItem>
  ) : null;
};

export default CartProductItem;
