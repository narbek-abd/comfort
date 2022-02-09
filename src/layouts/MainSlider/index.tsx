import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import * as S from "./style";

import mainImg from "../../assets/img/main.jpg";
import * as G from "../../globalStyle";

const MainSlider: React.FC = () => {
	return (
		<S.MainSlider>
			<Swiper
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<S.SlideLink bg={mainImg} href="#">
						<G.Container>
							<S.MiniTitle>
								Best Furniture For Your Castle....
							</S.MiniTitle>
							<S.Title>
								New Furniture Collection Trends in 2020
							</S.Title>
							<S.SubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</S.SubTitle>
						</G.Container>
					</S.SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<S.SlideLink bg={mainImg} href="#">
						<G.Container>
							<S.MiniTitle>
								Best Furniture For Your Castle....
							</S.MiniTitle>
							<S.Title>
								New Furniture Collection Trends in 2020
							</S.Title>
							<S.SubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</S.SubTitle>
						</G.Container>
					</S.SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<S.SlideLink bg={mainImg} href="#">
						<G.Container>
							<S.MiniTitle>
								Best Furniture For Your Castle....
							</S.MiniTitle>
							<S.Title>
								New Furniture Collection Trends in 2020
							</S.Title>
							<S.SubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</S.SubTitle>
						</G.Container>
					</S.SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<S.SlideLink bg={mainImg} href="#">
						<G.Container>
							<S.MiniTitle>
								Best Furniture For Your Castle....
							</S.MiniTitle>
							<S.Title>
								New Furniture Collection Trends in 2020
							</S.Title>
							<S.SubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</S.SubTitle>
						</G.Container>
					</S.SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<S.SlideLink bg={mainImg} href="#">
						<G.Container>
							<S.MiniTitle>
								Best Furniture For Your Castle....
							</S.MiniTitle>
							<S.Title>
								New Furniture Collection Trends in 2020
							</S.Title>
							<S.SubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</S.SubTitle>
						</G.Container>
					</S.SlideLink>
				</SwiperSlide>
			</Swiper>
		</S.MainSlider>
	);
};

export default MainSlider;
