import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Counter from "../../../components/Counter";
import { removeFromCart, changeProductCount } from "../../../store/redusers/CartReduser";
import { useDispatch } from 'react-redux';


interface CartProductItemProps {
  storageProduct: any;
}

const CartProductItem: React.FC<CartProductItemProps> = ({
  storageProduct,
}) => {
  const [product, setProduct] = useState(null);
   const dispatch = useDispatch();


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${storageProduct.id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  function onCountChange(count: number) {
        dispatch(changeProductCount(product, count))
  }

  function removeProduct() {
    dispatch(removeFromCart(product));
  }

  return (
    product && (
      <S.CartProductItem>
        <S.ProductImg>
          <Link to="/">
            <img src={product.images[0]} alt="product" />
          </Link>
        </S.ProductImg>
        <S.Inf>
          <S.Name>
            <Link to="/">{product.title}</Link>
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
