import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface DropdownProps {
	title: any;
	children: React.ReactNode;
	position?: "right" | "left";
	[params: string]: any;
}

const Dropdown = ({
	title,
	position = "left",
	children,
	...params
}: DropdownProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const dropdownRef = useRef(null);

	useOnClickOutside(dropdownRef, () => setIsVisible(false));

	return (
		<S.Dropdown
			position={position}
			opened={isVisible}
			ref={dropdownRef}
			{...params}
		>
			<span onClick={() => setIsVisible(!isVisible)}>
				{title}
			</span>

			<ul>{children}</ul>
		</S.Dropdown>
	);
};

export default Dropdown;
