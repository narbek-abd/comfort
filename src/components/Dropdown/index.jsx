import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const Dropdown = ({ title, children }) => {
	const [openedDropdown, setOpenDropdown] = useState(false);
	const el = useRef();

	useEffect(() => {
		function toggleClick(e) {
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
