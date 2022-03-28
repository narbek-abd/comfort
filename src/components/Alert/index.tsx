import React, { useState } from "react";
import * as G from "../../globalStyle";

import * as S from "./style";

interface AlertProps {
  children?: React.ReactNode;
  variant: string;
}

const Alert = ({ variant, children }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <S.Alert variant={variant}>
          <button onClick={() => setIsVisible(false)}>X</button>
          {children}
        </S.Alert>
      )}
    </>
  );
};

export default Alert;
