import React from "react";
import Header from "../../layouts/Header";
import BottomNavBar from "../../components/BottomNavbar";
import MainSlider from "../../layouts/MainSlider";
import FeaturedProducts from "../../layouts/FeaturedProducts";
import TabsProducts from "../../layouts/TabsProducts";
import Advantages from "../../layouts/Advantages";
import UniqueProduct from "../../layouts/UniqueProduct";

const Home = () => {
	return (
		<>
			<Header />
			<MainSlider />
			<FeaturedProducts />
			<TabsProducts />
			<Advantages />
			<UniqueProduct />
			<BottomNavBar name="home" />
		</>
	);
};

export default Home;
