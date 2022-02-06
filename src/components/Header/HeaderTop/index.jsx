import React, { useState } from "react";
import { SContainer } from "../../../globalStyle";
import {
	SHeaderTop,
	SInner,
	SLeft,
	SRight,
	SUserButton,
	SDropdown,
} from "./style";
import { Icon } from "../../Icon.js";
import Dropdown from "../../ui/Dropdown";

const HeaderTop = () => {
	return (
		<SHeaderTop>
			<SContainer>
				<SInner>
					<SLeft>
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
					</SLeft>
					<SRight>
						<SUserButton>
							<Dropdown
								title={ <> English <Icon name="arrow" /></> } >
								<li>Russian</li>
							</Dropdown>
						</SUserButton>

						<SUserButton>
							<Dropdown
								title={ <> USD <Icon name="arrow" /></> } >
								<li>Euro</li>
							</Dropdown>
						</SUserButton>

						<SUserButton>
							<a href="#">Login <Icon name="user" /></a>
						</SUserButton>

						<SUserButton>
							<a href="#">Wishlist <Icon name="heart" /></a>
						</SUserButton>

						<SUserButton>
						<a href="#">
							<Icon name="basket" />
						</a>
						</SUserButton>

					</SRight>
				</SInner>
			</SContainer>
		</SHeaderTop>
	);
};

export default HeaderTop;
