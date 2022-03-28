import React, { useState, useRef, useEffect } from "react";

import * as S from "./style";
import axios from "axios";
import CatalogMenu from "../../../components/CatalogMenu";
import Icon from "../../../components/Icon";

import NavbarItem from "./NavbarItem";
import navbarLinks from "../HeaderData";
import MultiMenu from "../../../components/MultiMenu";

const Navbar = () => {
	let [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isCatalogMenuVisible, setCatalogMenuVisible] = useState(false);
	const [isdeskTop, setIsDeskTop] = useState(true);
	const [catalogList, setCatalogList] = useState([]);

	/** Определяем ширину экрана и следим за шириной через watchmedia */
	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsDeskTop(false);
		}
	}, []);

	const mediaQueryList = window.matchMedia("(max-width: 768px)");
	mediaQueryList.addEventListener("change", (event) => {
		if (event.matches) {
			setIsDeskTop(false);
		} else {
			setIsDeskTop(true);
		}
	});

	function toggleHam() {
		if (window.innerWidth <= 768) {
			setMobileMenuOpen(!isMobileMenuOpen);
		}
	}

	function stop(e: React.MouseEvent) {
		if (window.innerWidth <= 768) {
			e.stopPropagation();
		}
	}

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (!(e.target as HTMLElement).closest(".catalog-menu")) {
				setCatalogMenuVisible(false);
			}
		}
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	useEffect(() => {
		axios
			.get("http://comfort.loc/api/categories")
			.then(function (response) {
				setCatalogList(response.data);
			});
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
					{isdeskTop && (
						<ul>
							<li
								className="catalog-menu"
								onClick={() =>
									setCatalogMenuVisible(!isCatalogMenuVisible)
								}
							>
								<span>
									Catalog <Icon name="arrow" />
								</span>
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
					)}

					{!isdeskTop && <MultiMenu list={catalogList} />}
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

const catalogListss = [
	{
		id: 1,
		name: "Phones",

		children: [
			{
				id: 11,
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
