import React, { useRef, useState, useEffect } from "react";
import * as S from "./style";
import NavbarItem from "../NavbarItem";
import { Icon } from "../../../../components/Icon";
import slideToggle, { slideUp } from "../../../../utils/SlideUpDown";

interface NavbarDropdownProps {
	link: any;
	childLinks: any;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
	link,
	childLinks,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const dropdownListRef = useRef(null);

	useEffect(() => {
		function toggleClick(e: any) {
			const dropdown = e.target.closest(".navbar-dropdown");
			if (!dropdown) {
				slideUp(dropdownListRef.current, 200);
				return;
			}

			// Если переключатель вложенный, не скрываем родительский элемент
			if (e.target.closest("span").dataset.level >= 1) return;

			if (dropdown !== dropdownRef.current) {
				slideUp(dropdownListRef.current, 200);
			}
		}

		document.addEventListener("click", toggleClick);

		return () => {
			document.removeEventListener("click", toggleClick);
		};
	}, []);

	function toggleDropdown() {
		slideToggle(dropdownListRef.current, 200);
	}

	return (
		<div className="navbar-dropdown" ref={dropdownRef}>
			<S.DropdownToggle
				onClick={toggleDropdown}
				data-level={link["level"]}
			>
				{link["name"]} <Icon name="arrow" />
			</S.DropdownToggle>

			<S.DropdownList ref={dropdownListRef}>
				{childLinks.map((link: any) => {
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
			</S.DropdownList>
		</div>
	);
};

export default NavbarDropdown;
