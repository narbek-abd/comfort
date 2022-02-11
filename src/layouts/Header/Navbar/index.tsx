import React, { useState, useRef } from "react";

import * as S from "./style";
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
						{navbarLinks.map((link) => {
							return (
								<NavbarItem
									link={link}
									key={link.id}
									hasChildren={link["children"] === undefined ? false : true}
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

export default Navbar;
