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

  const [sliderDirection, setSliderDirection] = useState<
    "vertical" | "horizontal"
  >("vertical");
  const [sliderPerView, setSliderPerView] = useState<number | 'auto'>(3);
  const [sliderCenteredSlides, setSliderCenteredSlides] = useState<number | 'auto'>(3);

  function changeMainImg(e: any) {
    let selectedImgId = e.target.closest(".swiper-slide").dataset.id;

    setMainImgUrl(images.find((img) => img.id == selectedImgId).url);
  }

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setSliderDirection("horizontal");
      setSliderPerView('auto');
    }
  }, []);

  const mediaQueryList = window.matchMedia("(max-width: 992px)");
  mediaQueryList.addEventListener("change", (event) => {
    if (event.matches) {
      setSliderDirection("horizontal");
      setSliderPerView('auto');
    } else {
      setSliderDirection("vertical");
      setSliderPerView(3);
    }
  });

  console.log(sliderDirection);

  return (
    <S.ProductGallery>
      <S.Left>
        <div className="swiper-button-prev">
          <Icon name="arrow" />
        </div>

        <Swiper
          modules={[Navigation]}
          direction={sliderDirection}
          slidesPerView={sliderPerView}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          centeredSlides={true}
          spaceBetween={0}
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
