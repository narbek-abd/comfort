import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Counter from "../../../components/Counter";
import {
  removeFromCart,
  changeProductCount,
} from "../../../store/action-creators/Cart";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../api/Product";
import { apiUrl } from "../../../constants/project";

interface CartProductItemProps {
  storageProduct: { id: number; quantity: number };
}

const CartProductItem = ({ storageProduct }: CartProductItemProps) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct(storageProduct.id).then((response) => setProduct(response.data));
  }, []);

  function onCountChange(count: number) {
    dispatch(changeProductCount(product, count));
  }

  function removeProduct() {
    dispatch(removeFromCart(product));
  }

  return (
    product && (
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
            <Link to="/">{product.name}</Link>
          </S.Name>
          <span>Color: Brown</span>
          <span>Size: XL</span>
        </S.Inf>

        <S.Price>
          <S.CurrentPrice>{product.price}</S.CurrentPrice>
          <S.Count>
            <Counter
              min={1}
              max={product.stock}
              current={storageProduct.quantity}
              onChange={onCountChange}
            />
          </S.Count>

          <S.Total>{product.price * storageProduct.quantity}</S.Total>
        </S.Price>

        <S.RemoveProductBtn onClick={removeProduct}>X</S.RemoveProductBtn>
      </S.CartProductItem>
    )
  );
};

export default CartProductItem;
