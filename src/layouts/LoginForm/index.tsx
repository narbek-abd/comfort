import React, { useState } from "react";
import * as S from "./style";
import * as G from "../../globalStyle";

import Button from "../../components/Button";
import Cookies from "js-cookie";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LoginFormValidation from "../../validation/Login";
import LoginFormTypes from "../../types/LoginFormTypes";
import { loginUser } from "../../api/User";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/action-creators/User";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormTypes>({
    resolver: yupResolver(LoginFormValidation),
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
    setIsLoading(true);

    try {
      let response = await loginUser(data);
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
    <S.LoginForm>
      <S.FormHeader>
        <h3>Login</h3>
        <p>Please type details bellow.</p>
      </S.FormHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.invalid && <G.Err>{errors.invalid.message}</G.Err>}
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
          <Button isLoading={isLoading}>Submit</Button>
        </S.Group>

        <S.Group>
          <Link to="/login">Don’t have an Account?Create account </Link>
        </S.Group>
      </form>
    </S.LoginForm>
  );
};

export default LoginForm;
