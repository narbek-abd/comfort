import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";

import * as S from "./style";

interface ProductGalleryProps {
  images: Array<{ id: number; url: string; main?: boolean }>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [mainImgUrl, setMainImgUrl] = useState(
    images.find((img) => img.main === true).url
  );

  const [mainImgTransform, setMainImgTransform] = useState(`translate(-50%, -50%) scale(1)`);
  const [mainImgtransformOrigin, setMainImgtransformOrigin] = useState('');

  function changeMainImg(e: any) {
    let selectedImgId = e.target.closest(".swiper-slide").dataset.id;

    setMainImgUrl(images.find((img) => img.id == selectedImgId).url);
  }

function handleMouseOver(e:any) {
    setMainImgTransform(`translate(-50%, -50%) scale(2, 2)`);
  }

function handleMouseOut(e:any) {
    setMainImgTransform(`translate(-50%, -50%) scale(1)`);
    setMainImgtransformOrigin("0% 0%")
  }


  function handleMouseMove(e:any) {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100

    setMainImgtransformOrigin(`${x}% ${y}%`)
  }

  return (
    <S.ProductGallery>
      <S.Left style={{ height: "330px" }}>
        <Swiper
          modules={[Navigation]}
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={10}
          style={{ height: "490px" }}
        >
          {images.map((img) => {
            return (
              <SwiperSlide
                onClick={changeMainImg}
                key={img.id}
                data-id={img.id}
              >
                <img src={img.url} alt="product img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.Left>

      <S.Right>
        <S.MainImg>
          <img src={mainImgUrl} alt="main img" 
          onMouseOver={handleMouseOver} 
          onMouseMove={handleMouseMove} 
          onMouseOut={handleMouseOut} 
          style={{transform: mainImgTransform, transformOrigin: mainImgtransformOrigin}}/>
        </S.MainImg>
      </S.Right>
    </S.ProductGallery>
  );
};

export default ProductGallery;
