import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

interface DropdownProps {
	title: any;
	children: React.ReactNode;
	[params: string]: any;
}

const Dropdown = ({ title, children, ...params }: DropdownProps) => {
	const [openedDropdown, setOpenDropdown] = useState(false);
	const el = useRef(null);

	useEffect(() => {
		function toggleClick(e: MouseEvent) {
			const dropdown = (e.target as HTMLElement).closest(".dropdown");
			if (dropdown && dropdown !== el.current) {
				setOpenDropdown(false);
			}

			if (!dropdown) {
				setOpenDropdown(false);
			}
		}

		document.addEventListener("click", toggleClick);

		return () => {
			document.removeEventListener("click", toggleClick);
		};
	}, []);

	return (
		<div className="dropdown" ref={el} {...params}>
			<span onClick={() => setOpenDropdown(!openedDropdown)}>
				{title}
			</span>

			<ul style={{ display: openedDropdown ? "block" : "none" }}>
				{children}
			</ul>
		</div>
	);
};

export default Dropdown;
