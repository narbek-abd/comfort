import React, { useState } from "react";
import * as G from "../../../globalStyle";
import * as S from "./style";
import { Icon } from '../../../components/Icon';
import Dropdown from "../../../components/Dropdown";

const HeaderTop: React.FC = () => {
	return (
		<S.HeaderTop>
			<G.Container>
				<S.Inner>
					<S.Left>
						<div>
							<a href="mailto:mhhasanul@gmail.com">
								<Icon name="mail" />
								comfortl@gmail.com
							</a>
						</div>
						<div>
							<a href="tel:1234567890">
								<Icon name="phone" />
								(12345)67890
							</a>
						</div>
					</S.Left>
					<S.Right>
						<S.UserButton>
							<Dropdown
								title={ <> English <Icon name="arrow" /></> } >
								<li>Russian</li>
							</Dropdown>
						</S.UserButton>

						<S.UserButton>
							<Dropdown
								title={ <> USD <Icon name="arrow" /></> } >
								<li>Euro</li>
							</Dropdown>
						</S.UserButton>

						<S.UserButton>
							<a href="#">Login <Icon name="user" /></a>
						</S.UserButton>

						<S.UserButton>
							<a href="#">Wishlist <Icon name="heart" /></a>
						</S.UserButton>

						<S.UserButton>
						<a href="#">
							<Icon name="basket" />
						</a>
						</S.UserButton>

					</S.Right>
				</S.Inner>
			</G.Container>
		</S.HeaderTop>
	);
};

export default HeaderTop;
