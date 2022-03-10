import React from 'react';
import * as S from "./style";

interface SpinnerProps {
  [params:string]: any;
  variant?: string;
}

const Spinner = ({variant, ...params} : SpinnerProps) => {
  return (
    <S.Spinner {...params} variant={variant ? variant : 'pink'}>
    </S.Spinner>
  );
};

export default Spinner;