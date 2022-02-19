import React, { useEffect, useState } from "react";
import * as G from "../../globalStyle";
import * as S from "./style";
import ProductCard from "../../components/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeaturedProducts: React.FC = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		function getProducts() {
			fetch("https://dummyjson.com/products")
				.then((response) => response.json())
				.then((json) => setProducts(json.products));
		}

		getProducts();
	}, []);
	return (
		<S.FeaturedProducts>
			<G.SectionTitle>Featured Products</G.SectionTitle>

			<G.Container>
				<Swiper
					modules={[Pagination]}
					spaceBetween={50}
					slidesPerView={3}
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
					{products.map((product) => {
						return (
							<SwiperSlide key={product.id}>
								<S.Inner>
									<ProductCard product={product} />
								</S.Inner>
							</SwiperSlide>
						);
					})}
					<div className="swiper-pagination"></div>
				</Swiper>
			</G.Container>
		</S.FeaturedProducts>
	);
};

export default FeaturedProducts;
