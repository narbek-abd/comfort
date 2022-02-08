import React from "react";
import product from "../../assets/img/products/product1.jpg";
import { Icon } from "../Icon";

import {
	SProductCard,
	SInner,
	SImg,
	SInf,
	SName,
	SPrice,
	SPriceNew,
	SPriceOld,
	SActions,
} from "./style";
import { Link } from 'react-router-dom';

const ProductCard = () => {
	return (
		<SProductCard>
			<Link to="#">
				<SImg>
					<img src={product} alt="" />
				</SImg>

				<SInf>
					<SName>Comfort Handy Craft</SName>
					<SPrice>
						<SPriceNew>$42.00</SPriceNew>
						<SPriceOld>$65.00</SPriceOld>
					</SPrice>
				</SInf>
			</Link>

			<SActions>
				<Icon name="basket" />
				<Icon name="heart" />
			</SActions>
		</SProductCard>
	);
};

export default ProductCard;
