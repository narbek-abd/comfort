import { screen } from "@testing-library/react";
import { render, store } from "../../test/test-utils";
import "../../test/mock";
import ProductMain from "./index";
import axios from "axios";
import { ProductTypes } from "../../types/ProductTypes";

describe("ProductMain component", () => {
	let product: ProductTypes;

	beforeAll(() => {
		product = {
			id: 1,
			name: "Iphone",
			price: 123,
			quantity: 12,
			category_id: 1,
			description: '',
			category: {
				id: 1,
				slug: 'phones',
				parent_id: 2,
				name: "phones",
			},
			images: [{ id: 1, image: "https://image.png" }],
		};
	});

	test("should display product data", () => {
		const { container } = render(<ProductMain product={product} />);

		expect(container).toMatchSnapshot();
	});
});
