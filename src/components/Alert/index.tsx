import React from "react";
import * as G from "../../globalStyle";

import * as S from "./style";

interface AlertProps {
  children?: React.ReactNode;
  message: string;
  variant: string;
}

const Alert = ({ message, variant, children }: AlertProps) => {
  return (
    <>
      {message !== "" && (
        <S.Alert variant={variant}>
          <S.Inner>
            {message}

            {children}
          </S.Inner>
        </S.Alert>
      )}
    </>
  );
};

export default Alert;
