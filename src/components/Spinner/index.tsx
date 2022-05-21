import React from 'react';
import * as S from "./style";

interface SpinnerProps {
  [params:string]: any;
  variant?: "default" | "button";
}

const Spinner = ({variant = "default", ...params} : SpinnerProps) => {
  return (
    <S.Spinner {...params} variant={variant} data-testid="spinner">
    </S.Spinner>
  );
};

export default Spinner;