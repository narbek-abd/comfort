import React from "react";

import * as G from "globalStyle";
import * as S from "./style";
import Navbar from "./Navbar";
import HeaderTop from "./HeaderTop";
import Icon from "components/Icon";
import SearchBar from "./SearchBar";
import BottomNavbar from "components/BottomNavbar";

const Header = () => {
	return (
		<S.Header>
			<HeaderTop />
			
			<G.Container>
				<S.HeaderBottom>
					<G.Logo to="/" className="logo">
						<Icon name="logo" />
					</G.Logo>

					<S.Right>
						<Navbar />
						<SearchBar />
					</S.Right>
				</S.HeaderBottom>
			</G.Container>

			<BottomNavbar />
		</S.Header>
	);
};

export default Header;
