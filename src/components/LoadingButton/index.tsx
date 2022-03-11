import React from "react";
import * as G from "../../globalStyle";
import Spinner from "../Spinner";

interface LoadingButtonProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  [params: string]: any;
}

const LoadingButton = ({
  isLoading,
  children,
  ...params
}: LoadingButtonProps) => {
  return (
    <G.Button type="submit" disabled={isLoading} {...params}>
      <span>{children}</span>
      {isLoading && <Spinner variant="button" />}
    </G.Button>
  );
};

export default LoadingButton;
