import React, { useState, useEffect } from "react";
import * as S from "./style";
import * as G from "globalStyle";
import Button from "components/Button";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { OrderFormValidation } from "validation";
import { OrderFormTypes } from "types/FormTypes";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/redusers";

import { useNavigate } from "react-router-dom";
import { clearCart } from "store/action-creators/Cart";
import api from 'api';

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<OrderFormTypes>({
    resolver: yupResolver(OrderFormValidation),
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let user = useSelector((state: RootState) => state.user.data);
  let cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
    }
  }, [user]);

  const onSubmit: SubmitHandler<OrderFormTypes> = async (data) => {
    setIsLoading(true);
    data.products = cart.products;

    try {
      await api.orders.createOrder(data);

      dispatch(clearCart());

      user ? navigate("/user/orders", { replace: true }) : navigate("/", { replace: true });
    } catch (e: any) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError("custom", {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.OrderForm>
      <G.Container>
        <S.FormHeader>
          <h3>Contact Information</h3>
          <p>Please type details bellow.</p>
        </S.FormHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.custom && <G.Err>{errors.custom.message}</G.Err>}

          <S.Group>
            <input type="text" {...register("name")} placeholder="Name" />
            {errors.name && <G.Err>{errors.name.message}</G.Err>}
          </S.Group>

          <S.Group>
            <input type="email" {...register("email")} placeholder="Email" />
            {errors.email && <G.Err>{errors.email.message}</G.Err>}
          </S.Group>

          <S.Group>
            <input type="text" {...register("address")} placeholder="Address" />
            {errors.address && <G.Err>{errors.address.message}</G.Err>}
          </S.Group>

          <S.Group>
            <Button isLoading={isLoading}>Submit</Button>
          </S.Group>
        </form>
      </G.Container>
    </S.OrderForm>
  );
};

export default OrderForm;
