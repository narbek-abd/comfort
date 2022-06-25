import React, { useEffect, useState } from "react";
import * as G from "globalStyle";
import * as S from "./style";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import api from "api";
import Spinner from "components/Spinner";
import useIsMounted from 'hooks/useIsMounted';

const LatestProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const isMounted = useIsMounted();

  useEffect(() => {
    api.products.getProducts("?sort_by=new&limit=8").then((response) => {
      if (response.status === 200 && isMounted()) {
        setIsLoading(false);
        setProducts(response.data.data);
      }
    });
  }, [isMounted]);

  return (
    <S.LatestProducts>
      <G.SectionTitle>Leatest Products</G.SectionTitle>

      <G.Container>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ el: ".latest-swiper-pagination", clickable: true }}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <S.Inner>
                  <ProductCard product={product} />
                </S.Inner>
              </SwiperSlide>
            );
          })}

          {isLoading && <Spinner />}
          <div className="latest-swiper-pagination"></div>
        </Swiper>
      </G.Container>
    </S.LatestProducts>
  );
};

export default LatestProducts;
