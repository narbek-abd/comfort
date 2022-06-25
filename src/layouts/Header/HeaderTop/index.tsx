import React from "react";
import * as G from "../../../globalStyle";
import * as S from "./style";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redusers";
import { selectCartQuantity } from "../../../store/redusers/CartReduser";
import { Link, useLocation } from "react-router-dom";
import { deleteUser } from "../../../store/action-creators/User";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import api from '../../../api';

const HeaderTop = () => {
	const dispatch = useDispatch();
	let location = useLocation();

	let wishlist = useSelector((state: RootState) => state.wishlist);
	let user = useSelector((state: RootState) => state.user.data);
	let cart = useSelector((state: RootState) => state.cart);

	let wishlistQuantity = wishlist.products.length;
	let cartProductsQuantity = useSelector(selectCartQuantity);

	async function logout() {
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
							<Link to="/user/wishlist">
								Wishlist <Icon name="heart" />
								<S.CartCount>
									<span>{wishlistQuantity}</span>
								</S.CartCount>
							</Link>
						</S.UserButton>

						<S.UserButton>
							<Link to="/cart">
								<Icon name="basket" />
								<S.CartCount>
									<span>{cartProductsQuantity}</span>
								</S.CartCount>
							</Link>
						</S.UserButton>

						<S.UserButton>
							{!user && (
								<Link to="/login" state={{ from: location }}>
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
