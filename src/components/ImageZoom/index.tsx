import React, { useState } from "react";

import * as S from "./style";

interface ImageZoomProps {
  src: string;
  [params: string]: any;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, ...params }) => {
  const [mainImgTransform, setMainImgTransform] = useState(
    `translate(-50%, -50%) scale(1)`
  );
  const [mainImgtransformOrigin, setMainImgtransformOrigin] = useState("");

  function handleMouseOver(e: React.MouseEvent) {
    setMainImgTransform(`translate(-50%, -50%) scale(2, 2)`);
  }

  function handleMouseOut(e: React.MouseEvent) {
    setMainImgTransform(`translate(-50%, -50%) scale(1)`);
    setMainImgtransformOrigin("0% 0%");
  }

  function handleMouseMove(e: React.MouseEvent) {
    const { left, top, width, height } = (e.target as HTMLElement).getBoundingClientRect();
    const x = ((e.pageX - (left + window.pageXOffset)) / width) * 100;
    const y = ((e.pageY - (top + window.pageYOffset)) / height) * 100;

    setMainImgtransformOrigin(`${x}% ${y}%`);
  }
  return (
    <S.ImageZoom>
      <img
        src={src}
        onMouseOver={handleMouseOver}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        style={{
          transform: mainImgTransform,
          transformOrigin: mainImgtransformOrigin,
        }}
        {...params}
      />
    </S.ImageZoom>
  );
};

export default ImageZoom;
