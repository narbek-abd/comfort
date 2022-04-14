import React, { useEffect, useState } from "react";
import * as G from "../../../globalStyle";
import * as S from "./style";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redusers";
import { getTotalQuantity } from "../../../store/action-creators/Cart";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../api/User";
import { deleteUser } from "../../../store/action-creators/User";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

const HeaderTop = () => {
	const dispatch = useDispatch();
	let cart = useSelector((state: RootState) => state.cart);
	let [cartProductsTotal, setCartProductsTotal] = useState(0);
	let user = useSelector((state: RootState) => state.user.data);

	useEffect(() => {
		let totalQuant = getTotalQuantity();

		setCartProductsTotal(totalQuant);
	}, [cart]);

	async function logout() {
		await logoutUser();
		Cookies.remove("auth-token");
		dispatch(deleteUser());
	}

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

						<S.UserButton>
							{!user && (
								<Link to="/login">
									Login <Icon name="user" />
								</Link>
							)}

							{user && (
								<Dropdown title={user.name} position="right">
									<li>
										<Link to="/user/orders">My orders</Link>
									</li>
									<li onClick={logout}>Logout</li>
								</Dropdown>
							)}
						</S.UserButton>
					</S.Right>
				</S.Inner>
			</G.Container>
		</S.HeaderTop>
	);
};

export default HeaderTop;
