import React from "react";
import * as S from "./style";
import Spinner from "../Spinner";

const ButtonWrapper = (Componenet: any, props: ButtonProps) => {
  const { children, disabled, isLoading, ...params } = props;
  return (
    <Componenet disabled={disabled || isLoading} isLoading {...params}>
      {isLoading ? (
        <>
          <span>{children}</span>
          <Spinner variant="button" />
        </>
      ) : (
        <>{children}</>
      )}
    </Componenet>
  );
};

interface ButtonProps {
  children?: React.ReactNode;
  size?: "small";
  disabled?: boolean;
  isLoading?: boolean;
  [params: string]: any;
}

export const Button = (props: ButtonProps) => ButtonWrapper(S.Button, props);

export const ButtonWarning = (props: ButtonProps) =>
  ButtonWrapper(S.ButtonWarning, props);

export const ButtonDanger = (props: ButtonProps) =>
  ButtonWrapper(S.ButtonDanger, props);
