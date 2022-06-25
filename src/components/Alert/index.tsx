import React, { useState } from "react";

import * as G from "../../globalStyle";
import * as S from "./style";

export interface AlertProps {
  children?: React.ReactNode;
  variant: "error" | "success" | "warning";
}

const Alert = ({ variant, children }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <S.Alert variant={variant}>
        {children}
        <button onClick={() => setIsVisible(false)}>X</button>
      </S.Alert>
    )
  );
};

export default Alert;
