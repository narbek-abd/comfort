import React from "react";
import Header from "../../layouts/Header";
import BottomNavBar from "../../components/BottomNavbar";
import Sidebar from "../../components/Sidebar";
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

			<Sidebar list={sidebarList} />

			<BottomNavBar name="home" />
		</>
	);
};

const sidebarList = [
	{ id: 1, name: "dashboard", icon: "heart", link: "admin/dashboard" },
	{
		id: 2,
		name: "products",
		icon: "arrow",
		children: [
			{ id: 3, name: "all products", link: "admin/products" },
			{ id: 4, name: "new product", link: "admin/products/create" },
		],
	},
	{
		id: 5,
		name: "categories",
		icon: "arrow",
		children: [
			{ id: 6, name: "all categories", link: "admin/categories" },
			{ id: 7, name: "new category", link: "admin/categories/create" },
		],
	},
];

export default Home;
