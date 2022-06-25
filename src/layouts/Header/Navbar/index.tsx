import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import NavbarItem from "./NavbarItem";
import navbarItems from "../HeaderData";
import MultiMenu from "../../../components/MultiMenu";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import CatalogBar from "../CatalogBar";
import api from "../../../api";
import useIsMounted from "../../../hooks/useIsMounted";

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [catalogList, setCatalogList] = useState([]);
	const isMobile = useMediaQuery("(max-width: 768px)");
	const isMounted = useIsMounted();

	useEffect(() => {
		api.categories.getCategoriesWithChildren().then(function (response) {
			isMounted() && setCatalogList(response.data);
		});
	}, [isMounted]);

	const hamburgerRef = useRef(null);
	const navbarRef = useRef(null);
	useOnClickOutside(navbarRef, (e: MouseEvent) => {
		if (
			isMobileMenuOpen &&
			!hamburgerRef.current.contains(e.target as HTMLElement)
		) {
			setMobileMenuOpen(false);
		}
	});

	return (
		<>
			<S.NavbarWrapper active={isMobileMenuOpen}>
				<S.Navbar ref={navbarRef} opened={isMobileMenuOpen}>
					{!isMobile && (
						<S.NavbarList>
							<CatalogBar list={catalogList} />
							{navbarItems.map((item) => {
								return (
									<NavbarItem
										item={item}
										key={item.id}
									></NavbarItem>
								);
							})}
						</S.NavbarList>
					)}

					{isMobile && <MultiMenu list={catalogList} />}
				</S.Navbar>
			</S.NavbarWrapper>

			<S.Hamburger
				ref={hamburgerRef}
				crossed={isMobileMenuOpen}
				onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</S.Hamburger>
		</>
	);
};

export default Navbar;
