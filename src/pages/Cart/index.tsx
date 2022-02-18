import React from 'react';
import * as S from "./style";
import Header from '../../layouts/Header';
import ShoppingCart from '../../layouts/ShoppingCart';


const Cart: React.FC = () => {
  return (
    <S.Cart>
    <Header />
    <ShoppingCart />
    </S.Cart>
  );
};

export default Cart;