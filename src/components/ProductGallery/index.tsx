import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImageZoom from "../ImageZoom";

import "swiper/css";

import * as S from "./style";
import { Icon } from "../Icon";

interface ProductGalleryProps {
  images: Array<{ id: number; url: string; main?: boolean }>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [mainImgUrl, setMainImgUrl] = useState(
    images.find((img) => img.main === true).url
  );

  function changeMainImg(e: React.MouseEvent) {
    let selectedImgId = +(
      (e.target as HTMLElement).closest(".swiper-slide") as HTMLElement
    ).dataset.id;

    setMainImgUrl(images.find((img) => img.id == selectedImgId).url);
  }

  return (
    <S.ProductGallery>
      <S.Left>
        <div className="swiper-button-prev">
          <Icon name="arrow" />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={0}
          breakpoints={{
            1: {
              slidesPerView: "auto",
              direction: "horizontal",
              centeredSlides: true,
            },
            992: {
              slidesPerView: 3,
              direction: "vertical",
            },
          }}
          style={{ height: "490px" }}
        >
          {images.map((img) => {
            return (
              <SwiperSlide
                onClick={changeMainImg}
                key={img.id}
                data-id={img.id}
              >
                <S.ImgWrap active={img.url === mainImgUrl}>
                  <img src={img.url} alt="product img" />
                </S.ImgWrap>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-button-next">
          <Icon name="arrow" />
        </div>
      </S.Left>

      <S.Right>
        <ImageZoom src={mainImgUrl} />
      </S.Right>
    </S.ProductGallery>
  );
};

export default ProductGallery;
