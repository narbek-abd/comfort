import React from "react";
import product from "../../assets/img/products/product1.jpg";
import { Icon } from "../Icon";

import * as S from "./style";
import { Link } from 'react-router-dom';

const ProductCard: React.FC = () => {
	return (
		<S.ProductCard>
			<Link to="#">
				<S.Img>
					<img src={product} alt="" />
				</S.Img>

				<S.Inf>
					<S.Name>Comfort Handy Craft</S.Name>
					<S.Price>
						<S.PriceNew>$42.00</S.PriceNew>
						<S.PriceOld>$65.00</S.PriceOld>
					</S.Price>
				</S.Inf>
			</Link>

			<S.Actions>
				<Icon name="basket" />
				<Icon name="heart" />
			</S.Actions>
		</S.ProductCard>
	);
};

export default ProductCard;
