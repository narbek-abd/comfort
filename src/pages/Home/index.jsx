import React from "react";
import FeaturedProducts from "layouts/FeaturedProducts";
import LatestProducts from "layouts/LatestProducts";
import Advantages from "layouts/Advantages";
import UniqueProduct from "layouts/UniqueProduct";

const Home = () => {
	return (
		<>
			<FeaturedProducts />
			<LatestProducts />
			<Advantages />
			<UniqueProduct />
		</>
	);
};

export default Home;
