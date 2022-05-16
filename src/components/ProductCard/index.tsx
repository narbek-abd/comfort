import React, { useEffect, useState } from "react";
import * as S from "./style";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import { apiUrl } from "../../constants/project";
import { RootState } from "../../store/redusers";
import { addProduct } from "../../store/action-creators/Cart";
import { addProductToWishlist } from "../../store/action-creators/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { ProductTypes } from "../../types/ProductTypes";

interface ProductCardProps {
	product: ProductTypes;
	variant?: "vertical" | "horizontal";
}

const ProductCard = ({ product, variant = "vertical" }: ProductCardProps) => {
	const dispatch = useDispatch();

	const cartProducts = useSelector((state: RootState) => state.cart.products);
	const wishlistProducts = useSelector(
		(state: RootState) => state.wishlist.products
	);

	const [alreadyInCart, setAlreadyInCart] = useState(false);
	const [alreadyInWishlist, setAlreadyInWishlist] = useState(false);

	useEffect(() => {
		cartProducts.forEach((cartProduct) => {
			if (cartProduct.id === product.id) {
				setAlreadyInCart(true);
			}
		});
	}, [cartProducts]);

	useEffect(() => {
		wishlistProducts.forEach((wishlistProduct) => {
			if (wishlistProduct.id === product.id) {
				setAlreadyInWishlist(true);
			}
		});
	}, [wishlistProducts]);

	function addToCart() {
		dispatch(addProduct(product.id));

		setAlreadyInCart(true);
	}

	function addToWishlist() {
		dispatch(addProductToWishlist(product.id));

		setAlreadyInWishlist(true);
	}

	return (
		<S.ProductCard variant={variant}>
			<Link to={`/product/${product.id}`}>
				<S.Img>
					<img
						src={apiUrl + "/storage/" + product.images[0].image}
						alt=""
					/>
				</S.Img>

				<S.Inf>
					<S.Name>{product.name}</S.Name>
					<S.Price>
						<S.PriceNew>{product.price}</S.PriceNew>
						<S.PriceOld>$65.00</S.PriceOld>
					</S.Price>
				</S.Inf>
			</Link>

			<S.Actions>
				<Button
					size="small"
					color="blue"
					onClick={addToCart}
					disabled={alreadyInCart}
				>
					<Icon name="basket" />
				</Button>

				<Button
					size="small"
					color="blue"
					onClick={addToWishlist}
					disabled={alreadyInWishlist}
				>
					<Icon name="heart" />
				</Button>
			</S.Actions>
		</S.ProductCard>
	);
};

export default ProductCard;
