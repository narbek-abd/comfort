import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImageZoom from "../ImageZoom";

import "swiper/css";

import * as S from "./style";
import { Icon } from "../Icon";

interface ProductGalleryProps {
  imgLinks: string[];
}

const ProductGallery = ({ imgLinks }: ProductGalleryProps) => {
  const [mainImgUrl, setMainImgUrl] = useState(imgLinks[0]);

  function changeMainImg(e: React.MouseEvent) {
    let selectedImgUrl = (e.target as HTMLElement)
      .closest(".swiper-slide")
      .querySelector("img")
      .getAttribute("src");

    setMainImgUrl(selectedImgUrl);
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
          {imgLinks.map((url, index) => {
            return (
              <SwiperSlide onClick={changeMainImg} key={url + index.toString()}>
                <S.ImgWrap active={url === mainImgUrl}>
                  <img src={url} alt="product img" />
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
