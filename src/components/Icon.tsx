import React from "react";
import Icons from "../assets/symbol-defs.svg";

interface IconProps {
  name: string;
  [params:string]: any;
}

export const Icon = ({ name, ...params }: IconProps) => {
  return (
    <svg className={`icon icon-${name}`} {...params}>
      <use xlinkHref={Icons + `#${name}`} />
    </svg>
  );
};
