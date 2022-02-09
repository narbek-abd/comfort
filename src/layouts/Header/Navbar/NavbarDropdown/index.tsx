import React, { useRef, useState, useEffect } from "react";
import * as S from "./style";
import NavbarItem from "../NavbarItem";
import { Icon } from "../../../../components/Icon";

interface NavbarDropdownProps {
	link: any;
	childLinks: any;
	toggleDropdown: (e: any) => void;
	visibleDropdown: number;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
	link,
	childLinks,
	toggleDropdown,
	visibleDropdown,
}) => {
	const dropdown = useRef(null);

	useEffect(() => {
		console.log(dropdown)
		if (visibleDropdown == link.id && dropdown !== null) {
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
			<S.DropdownToggle onClick={toggleDropdown} data-id={link.id}>
				{link["name"]} <Icon name="arrow" />
			</S.DropdownToggle>

			<S.DropdownList ref={dropdown}>
				{childLinks.map((link: any) => {
					return (
						<NavbarItem
							link={link}
							key={link.id}
							hasChildren={
								link["children"] === undefined ? false : true
							}
							toggleDropdown={toggleDropdown}
							visibleDropdown={visibleDropdown}
						></NavbarItem>
					);
				})}
			</S.DropdownList>
		</>
	);
};

export default NavbarDropdown;
