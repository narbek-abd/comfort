import React from 'react';
import Header from '../../components/Header/Header';
import BottomNavBar from '../../components/BottomNavbar';
import MainSlider from '../../components/MainSlider'
import FeaturedProducts from '../../components/FeaturedProducts'

const Home = () => {
	return (
		<>
		<Header />
		<MainSlider />
		<FeaturedProducts />
		
		<BottomNavBar name='home' />
		</>
	);
};

export default Home;