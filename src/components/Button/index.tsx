import React from "react";
import * as S from "./style";
import Spinner from "components/Spinner";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "small" | "large";
  color?: "danger" | "warning" | "blue";
  variant?: "contained" | "outlined";
  disabled?: boolean;
  isLoading?: boolean;
  [params: string]: any;
  as?: "div" | "button";
}

const Button = (props: ButtonProps) => {
  const {
    children,
    disabled,
    variant = "contained",
    as = "button",
    isLoading,
    ...params
  } = props;
  return (
    <S.Button
      disabled={disabled || isLoading}
      variant={variant}
      isLoading={isLoading}
      as={as}
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

export default Button;
