import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./style";

import Icon from "../../../components/Icon";
import useDebounce from "../../../hooks/useDebounce";
import api from "../../../api";
import { ProductTypes } from "../../../types/ProductTypes";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../constants/project";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const SearchBar = () => {
	const [products, setProducts] = useState<ProductTypes[]>([]);
	const productsRef = useRef(null);
	const [productsIsVisible, setProductsIsVisible] = useState(false);

	useOnClickOutside(productsRef, () => {
		setProductsIsVisible(false);
	});

	function showProducts() {
		setProductsIsVisible(true);
	}

	const [searchValue, setSearchValue] = useState("");
	const debouncedSearchValue = useDebounce(searchValue, 500);

	const change = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		if (searchValue) {
			getProducts();
			setProductsIsVisible(true);
		} else {
			setProducts([]);
			setProductsIsVisible(false);
		}
	}, [debouncedSearchValue]);

	async function getProducts() {
		let response = await api.products.getProducts(`?search=${searchValue}`);
		setProducts(response.data);
	}

	return (
		<S.SearchBar>
			<S.SearchBarForm>
				<input
					type="text"
					value={searchValue}
					onChange={change}
					onClick={showProducts}
				/>

				<S.SearchButton>
					<Icon name="search" />
				</S.SearchButton>
			</S.SearchBarForm>

			{products.length > 0 && productsIsVisible && (
				<S.Products ref={productsRef}>
					{products.map((product) => {
						return (
							<S.Product key={product.id}>
								<Link to={`product/${product.id}`}>
									<S.ProductImg
										src={
											apiUrl +
											"/storage/" +
											product.images[0].image
										}
										alt="product"
									/>
									<span>{product.name}</span>
								</Link>
							</S.Product>
						);
					})}
				</S.Products>
			)}
		</S.SearchBar>
	);
};

export default SearchBar;
