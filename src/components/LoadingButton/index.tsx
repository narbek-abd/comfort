import React from "react";
import * as G from "../../globalStyle";
import Spinner from "../Spinner";

interface LoadingButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  [params: string]: any;
}

const LoadingButton = ({
  isLoading,
  children,
  onClick,
  ...params
}: LoadingButtonProps) => {
  return (
    <G.Button type="submit" disabled={isLoading} {...params} onClick={onClick}>
      <span style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>

      {isLoading && <Spinner variant="button" />}
    </G.Button>
  );
};

export default LoadingButton;
