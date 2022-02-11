import React from "react";

import * as G from "../../globalStyle";
import * as S from "./style";
import Navbar from "./Navbar";
import HeaderTop from "./HeaderTop";
import { Icon } from "../../components/Icon";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
	return (
		<>
			<HeaderTop />

			<S.Header>
				<G.Container>
					<S.Inner>
						<G.Logo href="/" className="logo">
							<Icon name="logo" />
						</G.Logo>

						<S.Right>
							<Navbar />
							<SearchBar />
						</S.Right>
					</S.Inner>
				</G.Container>
			</S.Header>
		</>
	);
};

export default Header;
