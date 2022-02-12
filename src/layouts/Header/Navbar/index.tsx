import React, { useState, useRef } from "react";

import * as S from "./style";
import CatalogMenu from "./CatalogMenu";
import NavbarItem from "./NavbarItem";
import navbarLinks from "../HeaderData";

const Navbar: React.FC = () => {
	let [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false);

	function toggleHam() {
		if (window.innerWidth <= 768) {
			toggleMobileMenuOpen(!isMobileMenuOpen);
		}
	}

	function stop(e: any) {
		if (window.innerWidth <= 768) {
			e.stopPropagation();
		}
	}

	return (
		<>
			<S.NavbarWrapper
				active={isMobileMenuOpen ? true : false}
				onClick={toggleHam}
			>
				<S.Navbar
					opened={isMobileMenuOpen ? true : false}
					onClick={stop}
				>
					<ul>
						<CatalogMenu list={ catalogList } />

						{navbarLinks.map((link) => {
							return (
								<NavbarItem
									link={link}
									key={link.id}
									hasChildren={
										link["children"] === undefined
											? false
											: true
									}
								></NavbarItem>
							);
						})}
					</ul>
				</S.Navbar>
			</S.NavbarWrapper>

			<S.Hamburger
				crossed={isMobileMenuOpen ? true : false}
				onClick={toggleHam}
			>
				<span></span>
				<span></span>
				<span></span>
			</S.Hamburger>
		</>
	);
};

const catalogList = [
	{
		id: 1,
		name: "Phones",
		children: [
			{
				id: 2,
				name: "Mobile Phones",
				children: [
					{ id: 4, name: "Samsung" },
					{ id: 5, name: "LG" },
				],
			},
			{
				id: 3,
				name: "Gadgets",
				children: [
					{ id: 6, name: "HeadPhones" },
					{ id: 7, name: "battaries" },
				],
			},
		],
	},

	{
		id: 8,
		name: "Clothing",
		children: [
			{ id: 9, name: "Clothing for men" },
			{ id: 10, name: "Clothing for woman" },
		],
	},
];

export default Navbar;
