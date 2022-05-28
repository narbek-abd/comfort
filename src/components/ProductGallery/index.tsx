import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImageZoom from "../ImageZoom";
import { apiUrl } from "../../constants/project";
import {ImageTypes} from "../../types/ImageTypes"

import "swiper/css";

import * as S from "./style";
import Icon from "../Icon";

interface ProductGalleryProps {
  imageItems: ImageTypes[];
}

const ProductGallery = ({ imageItems }: ProductGalleryProps) => {
  const [mainImg, setMainImg] = useState(imageItems[0]);

  function changeMainImg(e: React.MouseEvent) {
    let selectedImg = imageItems.find(
      (image) =>
        image.id === +(e.currentTarget as HTMLElement).dataset.imageId
    );

    setMainImg(selectedImg);
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
          {imageItems.map((imageItem, index) => {
            return (
              <SwiperSlide
                onClick={changeMainImg}
                key={imageItem.id}
                data-image-id={imageItem.id}
              >
                <S.ImgWrap active={imageItem.image === mainImg.image}>
                  <img
                    src={apiUrl + "/storage/" + imageItem.image}
                    alt="product img"
                    data-testid={imageItem.id}
                  />
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
        <ImageZoom src={apiUrl + "/storage/" + mainImg.image} data-testid={`main-${mainImg.id}`}/>
      </S.Right>
    </S.ProductGallery>
  );
};

export default ProductGallery;
