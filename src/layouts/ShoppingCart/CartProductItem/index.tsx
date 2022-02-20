import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Counter from "../../../components/Counter";

interface CartProductItemProps {
  storageProduct: any;
  productMutated: (products: any) => void;
}

const CartProductItem: React.FC<CartProductItemProps> = ({
  storageProduct,
  productMutated,
}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${storageProduct.id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  function onCountChange(count: number) {
    let products: any = JSON.parse(localStorage.getItem("cart")) || [];
    products.forEach((productItem: any) => {
      if (productItem.id === product.id) {
        productItem.quantity = count;
      }
    });

     localStorage.setItem("cart", JSON.stringify(products));
    productMutated(products);
  }

  function removeProduct() {
    let products: any = JSON.parse(localStorage.getItem("cart")) || [];
    let filteredProductList = products.filter(
      (productItem: any) => productItem.id !== product.id
    );
    localStorage.setItem("cart", JSON.stringify(filteredProductList));
    productMutated(filteredProductList);
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
