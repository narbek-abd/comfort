import React, { useEffect, useState } from "react";
import * as G from "../../../globalStyle";
import * as S from "./style";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redusers";
import { getTotalQuantity } from "../../../store/action-creators/Cart";
import { Link } from 'react-router-dom';

const HeaderTop = () => {
	let cart = useSelector((state: RootState) => state.cart);
	let [cartProductsTotal, setCartProductsTotal] = useState(0);

	useEffect(() => {
		let totalQuant = getTotalQuantity()

		setCartProductsTotal(totalQuant);
	}, [cart]);

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
								title={
									<>
										{" "}
										English <Icon name="arrow" />
									</>
								}
							>
								<li>Russian</li>
							</Dropdown>
						</S.UserButton>

						<S.UserButton>
							<Dropdown
								title={
									<>
										{" "}
										USD <Icon name="arrow" />
									</>
								}
							>
								<li>Euro</li>
							</Dropdown>
						</S.UserButton>

						<S.UserButton>
							<a href="#">
								Login <Icon name="user" />
							</a>
						</S.UserButton>

						<S.UserButton>
							<a href="#">
								Wishlist <Icon name="heart" />
							</a>
						</S.UserButton>

						<S.UserButton>
							<Link to="/cart">
								<Icon name="basket" />
								<S.CartCount>
									<span>{cartProductsTotal}</span>
								</S.CartCount>
							</Link>
						</S.UserButton>
					</S.Right>
				</S.Inner>
			</G.Container>
		</S.HeaderTop>
	);
};

export default HeaderTop;
