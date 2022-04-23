import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../globalStyle";

import Button from "../../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { RegisterFormValidation } from "../../validation";
import { RegisterFormTypes } from "../../types/FormTypes";

import Cookies from "js-cookie";
import { setUser } from "../../store/action-creators/User";
import { useDispatch } from "react-redux";
import api from '../../api';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormTypes>({
    resolver: yupResolver(RegisterFormValidation),
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormTypes> = async (data) => {
    setIsLoading(true);

    try {
      let response = await api.users.registerUser(data);
      dispatch(setUser(response.data.user));
      Cookies.set("auth-token", response.data.token, {
        expires: 7,
        sameSite: "Lax",
      });
      navigate("/", { replace: true });
    } catch (e: any) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
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
    <S.RegisterForm>
      <S.FormHeader>
        <h3>Register</h3>
        <p>Please type details bellow.</p>
      </S.FormHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Group>
          <input type="text" {...register("name")} placeholder="Name" />
          {errors.name && <G.Err>{errors.name.message}</G.Err>}
        </S.Group>

        <S.Group>
          <input type="email" {...register("email")} placeholder="Email" />
          {errors.email && <G.Err>{errors.email.message}</G.Err>}
        </S.Group>

        <S.Group>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && <G.Err>{errors.password.message}</G.Err>}
        </S.Group>

        <S.Group>
          <input
            type="password"
            {...register("password_confirmation")}
            placeholder="Confirm password"
          />
          {errors.password_confirmation && (
            <G.Err>{errors.password_confirmation.message}</G.Err>
          )}
        </S.Group>

        <S.Group>
          <Button isLoading={isLoading}>Submit</Button>
        </S.Group>

        <S.Group>
          <Link to="/login">Already have an Account? Log in</Link>
        </S.Group>
      </form>
    </S.RegisterForm>
  );
};

export default RegisterForm;
