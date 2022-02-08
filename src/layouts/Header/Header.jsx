import React, { useState, useEffect, useRef } from "react";
import { SContainer, SLogo } from "../../globalStyle";
import { SHeader, SInner, SNavbarWrapper, SNavbar, SHamburger } from "./style";
import NavbarItem from "./Navbar/NavbarItem";
import navbarLinks from "./HeaderData";
import HeaderTop from "./HeaderTop";
import { Icon } from '../../components/Icon';
import SearchBar from "./SearchBar";

const Header = () => {
	let [isMobileMenuOpen, toggleMobileMenuOpen] = useState(false);
	let [visibleDropdown, setVisibleDropdown] = useState(null);

	function toggleHam() {
		toggleMobileMenuOpen(!isMobileMenuOpen);
	}

	function toggleDropdown(e) {
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

			<SHeader>
				<SContainer>
					<SInner>
						<SLogo href="/" className="logo">
							<Icon name="logo" />
						</SLogo>

						<SNavbarWrapper
							active={isMobileMenuOpen ? true : false}
							onClick={toggleHam}
						>
							<SNavbar
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
							</SNavbar>
						</SNavbarWrapper>

						<SearchBar />

						<SHamburger
							crossed={isMobileMenuOpen ? true : false}
							onClick={toggleHam}
						>
							<span></span>
							<span></span>
							<span></span>
						</SHamburger>
					</SInner>
				</SContainer>
			</SHeader>
		</>
	);
};

export default Header;
