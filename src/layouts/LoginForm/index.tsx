import React, { useState } from "react";
import * as S from "./style";
import * as G from "globalStyle";

import Button from "components/Button";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { LoginFormValidation } from "validation";
import { LoginFormTypes } from "types/FormTypes";
import { useDispatch } from "react-redux";
import { login } from "store/action-creators/User";
import api from "api";
import useIsMounted from "hooks/useIsMounted";

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
  const isMounted = useIsMounted();

  let navigate = useNavigate();
  let location = useLocation();
  let from = (location.state as any)?.from?.pathname || "/";

  const onSubmit: SubmitHandler<LoginFormTypes> = async (loginData) => {
    setIsLoading(true);

    try {
      await dispatch(login(loginData));

      navigate(from, { replace: true });
    } catch (e: any) {
      if (!isMounted()) return;

      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      if (!isMounted()) return;
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
          <Link to="/register">Don’t have an Account?Create account </Link>
        </S.Group>
      </form>
    </S.LoginForm>
  );
};

export default LoginForm;
