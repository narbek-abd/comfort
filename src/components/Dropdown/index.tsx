import React, { FC, useState, useEffect, useRef } from "react";
import "./style.scss";

interface DropdownProps {
	title: any;
}

const Dropdown: FC<DropdownProps> = ({ title, children }) => {
	const [openedDropdown, setOpenDropdown] = useState(false);
	const el = useRef(null);

	useEffect(() => {
		function toggleClick(e: any) {
			const dropdown = e.target.closest(".dropdown");
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
		<div className="dropdown" ref={el}>
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
