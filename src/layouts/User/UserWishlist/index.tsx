import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as G from "../../../globalStyle";
import Alert from "../../../components/Alert";
import WishlistItem from "./WishlistItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redusers";
import { getChildrenIds } from "../../../utils/getChildrenIds";
import api from "../../../api";
import Spinner from "../../../components/Spinner";
import useIsMounted from "../../../hooks/useIsMounted";

const UserWishlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const isMounted = useIsMounted();

  const [products, setProducts] = useState([]);
  let wishlist = useSelector((state: RootState) => state.wishlist);

  useEffect(() => {
    if (wishlist.products.length === 0) {
      setIsLoading(false);
      setAlertMessage("Wishlist is empty");
      setProducts([]);
    }
  }, [wishlist]);

  useEffect(() => {
    let ids = getChildrenIds(wishlist.products);

    api.products.getProductsByIds(ids).then((response) => {
      if (!isMounted()) return;

      setIsLoading(false);
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setAlertMessage("Something wend wrong");
      }
    });
  }, [isMounted]);

  return (
    <S.UserWishlist>
      <G.Container>
        <S.Wishlist>
          {isLoading && <Spinner />}
          {alertMessage && <Alert variant="warning">{alertMessage}</Alert>}

          {products.length > 0 && products.map((product) => {
            return <WishlistItem key={product.id} product={product} />;
          })}
        </S.Wishlist>
      </G.Container>
    </S.UserWishlist>
  );
};

export default UserWishlist;
