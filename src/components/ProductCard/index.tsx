import React from "react";
import productImg from "../../assets/img/products/product1.jpg";
import Icon from "../Icon";

import * as S from "./style";
import { Link } from "react-router-dom";

interface ProductCardProps {
	product: { id: number; name: string; price: number; description?: string; images: any; };
	variant?: "vertical" | "horizontal";
}

const ProductCard = ({ product, variant = "vertical" }: ProductCardProps) => {
	return (
		<S.ProductCard variant={variant}>
			<Link to={`/product/${product.id}`}>
				<S.Img>
					<img src={'http://comfort.loc/storage/' + product.images[0].image} alt="" />
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
				<span><Icon name="basket" /></span>
				<span><Icon name="heart" /></span>
			</S.Actions>
		</S.ProductCard>
	);
};

export default ProductCard;
