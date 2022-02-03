import React from "react";
import { SNavbarItem, SNavbarLink } from "../style";
import NavbarDropdown from "./NavbarDropdown";

const NavbarItem = ({ link, hasChildren, toggleDropdown, visibleDropdown }) => {
	return (
		<SNavbarItem>
			{hasChildren ? (
				<>
					{" "}
					<NavbarDropdown
						link={link}
						childLinks={link["children"]}
						toggleDropdown={toggleDropdown}
						visibleDropdown={visibleDropdown}
					/>{" "}
				</>
			) : (
				<SNavbarLink>{link.name}</SNavbarLink>
			)}
		</SNavbarItem>
	);
};

export default NavbarItem;
