import React from "react";
import * as S from "./style";
import Spinner from "../Spinner";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "small";
  color?: "danger" | "warning";
  variant?: "contained" | "outlined";
  disabled?: boolean;
  isLoading?: boolean;
  [params: string]: any;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    disabled,
    variant = "contained",
    isLoading,
    ...params
  } = props;
  return (
    <S.Button
      disabled={disabled || isLoading}
      variant={variant}
      isLoading={isLoading}
      {...params}
    >
      {isLoading ? (
        <>
          <span>{children}</span>
          <Spinner variant="button" />
        </>
      ) : (
        <>{children}</>
      )}
    </S.Button>
  );
};
