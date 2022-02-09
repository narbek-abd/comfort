import React from "react";
import * as S from "./style";
import NavbarDropdown from "../NavbarDropdown";


interface NavbarItemProps {
	link: any;
	toggleDropdown: (e: any) => void;
	visibleDropdown: number;
	hasChildren: boolean;
}

const NavbarItem = ({ link, hasChildren, toggleDropdown, visibleDropdown }: NavbarItemProps) => {
	return (
		<S.NavbarItem>
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
				<S.NavbarLink>{link.name}</S.NavbarLink>
			)}
		</S.NavbarItem>
	);
};

export default NavbarItem;
