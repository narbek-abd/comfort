import React from "react";
import { SectionTitle, SContainer } from "../../globalStyle.js";
import { SFeaturedProducts, SInner } from "./style";
import ProductCard from "../ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeaturedProducts = () => {
	return (
		<SFeaturedProducts>
			<SectionTitle>Featured Products</SectionTitle>

			<SContainer>
				<Swiper
					modules={[Pagination]}
					spaceBetween={50}
							slidesPerView= {3}
					pagination={{ el: ".swiper-pagination", clickable: true }}
					breakpoints={{
						1: {
							slidesPerView: 1,
						},
						576: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
					}}
				>
					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<SwiperSlide>
						<SInner>
							<ProductCard></ProductCard>
						</SInner>
					</SwiperSlide>

					<div className="swiper-pagination"></div>
				</Swiper>
			</SContainer>
		</SFeaturedProducts>
	);
};

export default FeaturedProducts;
