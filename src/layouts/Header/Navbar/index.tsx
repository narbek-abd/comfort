import React, { useState, useRef, useEffect } from "react";

import * as S from "./style";
import CatalogMenu from "../../../components/CatalogMenu";
import { Icon } from "../../../components/Icon";

import NavbarItem from "./NavbarItem";
import navbarLinks from "../HeaderData";

const Navbar: React.FC = () => {
	let [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false);
	const [isCatalogMenuVisible, setCatalogMenuVisible] = useState(false);

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

	useEffect(() => {
		function handleClick(e: any) {
			if (!e.target.closest(".catalog-menu")) {
				console.log(5)
				setCatalogMenuVisible(false);
			}
		}
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

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
						<li
							className="catalog-menu"
							onClick={() =>
								setCatalogMenuVisible(!isCatalogMenuVisible)
							}
						>
							<span>Catalog <Icon name="arrow" /></span>
							<CatalogMenu
								list={catalogList}
								isVisible={isCatalogMenuVisible}
								activeItemId={1}
							/>
						</li>

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
			{ id: 10, name: "Clothing for women" },
		],
	},
];

export default Navbar;
