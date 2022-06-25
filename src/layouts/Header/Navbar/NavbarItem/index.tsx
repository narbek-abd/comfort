import React, { useRef } from "react";
import * as S from "./style";
import useOnClickOutside from "hooks/useOnClickOutside";
import slideToggle, { slideUp } from "utils/SlideUpDown";
import Icon from "components/Icon";

interface NavbarItemProps {
	item: {
		id: number;
		name: string;
		link?: string;
		children?: NavbarItemProps["item"][];
	};
}

const NavbarItem = ({ item }: NavbarItemProps) => {
	const dropdownRef = useRef(null);
	const dropdownListRef = useRef(null);

	useOnClickOutside(dropdownRef, () => {
		slideUp(dropdownListRef.current, 200);
	});

	function toggleDropdown() {
		slideToggle(dropdownListRef.current, 200);
	}

	let hasChildren = item["children"] && item["children"].length > 0;

	return (
		<S.NavbarItem>
			{hasChildren ? (
				<S.Dropdown ref={dropdownRef}>
					<S.DropdownToggle onClick={toggleDropdown}>
						{item["name"]} <Icon name="arrow" />
					</S.DropdownToggle>

					<S.DropdownList ref={dropdownListRef}>
						{item["children"].map((item) => {
							return (
								<NavbarItem
									item={item}
									key={item.id}
								></NavbarItem>
							);
						})}
					</S.DropdownList>
				</S.Dropdown>
			) : (
				<S.NavbarLink to={item.link}>{item.name}</S.NavbarLink>
			)}
		</S.NavbarItem>
	);
};

export default NavbarItem;
