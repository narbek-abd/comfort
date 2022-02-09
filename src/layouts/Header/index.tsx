import React, { useState, useEffect, useRef } from "react";
import * as G from "../../globalStyle";
import * as S from "./style";
import NavbarItem from "./Navbar/NavbarItem";
import navbarLinks from "./HeaderData";
import HeaderTop from "./HeaderTop";
import { Icon } from "../../components/Icon";
import SearchBar from "./SearchBar";

const Header = () => {
	let [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false);
	let [visibleDropdown, setVisibleDropdown] = useState(null);

	function toggleHam() {
		toggleMobileMenuOpen(!isMobileMenuOpen);
	}

	function toggleDropdown(e: any) {
		if (visibleDropdown == e.currentTarget.dataset.id) {
			setVisibleDropdown(null);
		} else {
			setVisibleDropdown(e.currentTarget.dataset.id);
		}
	}

	useEffect(() => {
		function hideDropdowns() {
			setVisibleDropdown(null);
		}
		document.addEventListener("click", hideDropdowns);

		return () => {
			document.removeEventListener("click", hideDropdowns);
		};
	}, []);

	return (
		<>
			<HeaderTop />

			<S.Header>
				<G.Container>
					<S.Inner>
						<G.Logo href="/" className="logo">
							<Icon name="logo" />
						</G.Logo>

						<S.NavbarWrapper
							active={isMobileMenuOpen ? true : false}
							onClick={toggleHam}
						>
							<S.Navbar
								opened={isMobileMenuOpen ? true : false}
								onClick={(e) => e.stopPropagation()}
							>
								<ul>
									{navbarLinks.map((link) => {
										return (
											<NavbarItem
												link={link}
												key={link.id}
												hasChildren={
													link["children"] ===
													undefined
														? false
														: true
												}
												toggleDropdown={toggleDropdown}
												visibleDropdown={
													visibleDropdown
												}
											></NavbarItem>
										);
									})}
								</ul>
							</S.Navbar>
						</S.NavbarWrapper>

						<SearchBar />

						<S.Hamburger
							crossed={isMobileMenuOpen ? true : false}
							onClick={toggleHam}
						>
							<span></span>
							<span></span>
							<span></span>
						</S.Hamburger>
					</S.Inner>
				</G.Container>
			</S.Header>
		</>
	);
};

export default Header;
