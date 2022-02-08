import React from "react";
import { SSearchBar, SSearchButton } from "./style";

import { Icon } from "../../Icon";
import { SInput } from "../../../globalStyle";


const SearchBar = () => {
	return (
		<SSearchBar>
			<SInput square type="text" />

			<SSearchButton>
				<Icon name="search" />
			</SSearchButton>
		</SSearchBar>
	);
};

export default SearchBar;
