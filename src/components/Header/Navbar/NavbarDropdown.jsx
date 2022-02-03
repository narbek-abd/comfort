import React, { useRef, useState, useEffect } from "react";
import { SDropdownList, SNavbarLink } from "../style";
import NavbarItem from "./NavbarItem";

const NavbarDropdown = ({
	link,
	childLinks,
	toggleDropdown,
	visibleDropdown,
}) => {
	const dropdown = useRef(null);

	useEffect(() => {
		if (visibleDropdown == link.id) {
			dropdown.current.style.height =
				parseInt(dropdown.current.style.height, 10) == 0
					? dropdown.current.scrollHeight + "px"
					: 0;
		} else {
			dropdown.current.style.height = 0;
		}
	}, [visibleDropdown]);

	return (
		<>
			<SNavbarLink as="span" onClick={toggleDropdown} data-id={link.id}>
				{link["name"]} *
			</SNavbarLink>

			<SDropdownList ref={dropdown}>
				{childLinks.map((link) => {
					return (
						<NavbarItem
							link={link}
							key={link.id}
							hasChildren={
								link["children"] === undefined ? false : true
							}
						></NavbarItem>
					);
				})}
			</SDropdownList>
		</>
	);
};

export default NavbarDropdown;
