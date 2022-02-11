import React from "react";
import * as S from "./style";
import NavbarDropdown from "../NavbarDropdown";


interface NavbarItemProps {
	link: any;
	hasChildren: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ link, hasChildren }) => {
	return (
		<S.NavbarItem>
			{hasChildren ? (
					<NavbarDropdown
						link={link}
						childLinks={link["children"]}
					/>
			) : (
				<S.NavbarLink href="#">{link.name}</S.NavbarLink>
			)}
		</S.NavbarItem>
	);
};

export default NavbarItem;
