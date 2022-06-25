import React, { useRef, useState, useEffect } from "react";
import * as S from "./style";
import CatalogMenu from "components/CatalogMenu";
import Icon from "components/Icon";

import { useLocation } from "react-router-dom";
import useOnClickOutside from "hooks/useOnClickOutside";
import { CategoryTypes } from "types/CategoryTypes";

interface CatalogBarProps {
	list: CategoryTypes[];
}

const CatalogBar = ({ list }: CatalogBarProps) => {
	const [isCatalogMenuVisible, setCatalogMenuVisible] = useState(false);
	const location = useLocation();

	const catalogMenuRef = useRef(null);
	useOnClickOutside(catalogMenuRef, () => {
		if (isCatalogMenuVisible) {
			setCatalogMenuVisible(false);
		}
	});
	useEffect(() => {
		setCatalogMenuVisible(false);
	}, [location]);

	return (
		<S.CatalogBar>
			<span
				onMouseDown={() => setCatalogMenuVisible(!isCatalogMenuVisible)}
			>
				Catalog <Icon name="arrow" />
			</span>

			{isCatalogMenuVisible && (
				<S.Wrapper ref={catalogMenuRef}>
					<CatalogMenu list={list} activeItemId={75} />
				</S.Wrapper>
			)}
		</S.CatalogBar>
	);
};

export default CatalogBar;
