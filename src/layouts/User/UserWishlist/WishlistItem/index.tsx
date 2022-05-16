import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../../../store/action-creators/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../../../constants/project";
import { ProductTypes } from "../../../../types/ProductTypes";
import { RootState } from "../../../../store/redusers";

interface WishlistItemProps {
  product: ProductTypes;
}

const WishlistItem = ({ product }: WishlistItemProps) => {
  const dispatch = useDispatch();
  const [localProduct, setLocalProduct] = useState(null);

  let wishlist = useSelector((state: RootState) => state.wishlist);

  useEffect(() => {
    let localProduct = wishlist.products.find(
      (localProduct) => localProduct.id === product.id
    );

    setLocalProduct(localProduct);
  }, [wishlist]);

  function removeProduct(e: React.MouseEvent) {
    dispatch(removeFromWishlist(product.id));
  }

  return localProduct ? (
    <S.WishlistItem>
      <Link to={`/product/${product.id}`}>
        <S.ProductImg>
          <img
            src={apiUrl + "/storage/" + product.images[0].image}
            alt="product"
          />
        </S.ProductImg>
        <S.Inf>
          <span>{product.name}</span>
          <span>Category: {product.category.name}</span>
          <span>Size: XL</span>
        </S.Inf>
      </Link>
      <S.RemoveProductBtn onClick={removeProduct}>X</S.RemoveProductBtn>
    </S.WishlistItem>
  ) : null;
};

export default WishlistItem;
