import React from "react";
import { SSearchBar, SSearchButton } from "./style";

import Input from "../../ui/Input";
import { Icon } from "../../Icon";

const SearchBar = () => {
	return (
		<SSearchBar>
			<Input inputStyle="square" type="text" />

			<SSearchButton>
				<Icon name="search" />
			</SSearchButton>
		</SSearchBar>
	);
};

export default SearchBar;
