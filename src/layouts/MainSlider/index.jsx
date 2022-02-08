import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import {
	SlideLink,
	SMainSlider,
	SMiniTitle,
	STitle,
	SSubTitle,
} from "./style";

import mainImg from "../../assets/img/main.jpg";
import { SContainer, SButton } from "../../globalStyle";

const MainSlider = () => {
	return (
		<SMainSlider>
			<Swiper
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<SlideLink bg={mainImg} href="#">
						<SContainer>
							<SMiniTitle>
								Best Furniture For Your Castle....
							</SMiniTitle>
							<STitle>
								New Furniture Collection Trends in 2020
							</STitle>
							<SSubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</SSubTitle>
						</SContainer>
					</SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<SlideLink bg={mainImg} href="#">
						<SContainer>
							<SMiniTitle>
								Best Furniture For Your Castle....
							</SMiniTitle>
							<STitle>
								New Furniture Collection Trends in 2020
							</STitle>
							<SSubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</SSubTitle>
						</SContainer>
					</SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<SlideLink bg={mainImg} href="#">
						<SContainer>
							<SMiniTitle>
								Best Furniture For Your Castle....
							</SMiniTitle>
							<STitle>
								New Furniture Collection Trends in 2020
							</STitle>
							<SSubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</SSubTitle>
						</SContainer>
					</SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<SlideLink bg={mainImg} href="#">
						<SContainer>
							<SMiniTitle>
								Best Furniture For Your Castle....
							</SMiniTitle>
							<STitle>
								New Furniture Collection Trends in 2020
							</STitle>
							<SSubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</SSubTitle>
						</SContainer>
					</SlideLink>
				</SwiperSlide>

				<SwiperSlide>
					<SlideLink bg={mainImg} href="#">
						<SContainer>
							<SMiniTitle>
								Best Furniture For Your Castle....
							</SMiniTitle>
							<STitle>
								New Furniture Collection Trends in 2020
							</STitle>
							<SSubTitle>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Magna in est adipiscing in
								phasellus non in justo.
							</SSubTitle>
						</SContainer>
					</SlideLink>
				</SwiperSlide>
			</Swiper>
		</SMainSlider>
	);
};

export default MainSlider;
