import React from "react";
import * as S from "./style";

import { Icon } from "../../../components/Icon";
import * as G from "../../../globalStyle";


const SearchBar = () => {
	return (
		<S.SearchBar>
			<G.Input square type="text" />

			<S.SearchButton>
				<Icon name="search" />
			</S.SearchButton>
		</S.SearchBar>
	);
};

export default SearchBar;
