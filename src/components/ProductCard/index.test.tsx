import { screen } from "@testing-library/react";
import { render, store } from "test/test-utils";
import ProductCard from "./index";
import userEvent from "@testing-library/user-event";
import { ProductTypes } from "types/ProductTypes";

describe("ProductCard component", () => {
	let product: ProductTypes;

	beforeAll(() => {
		product = {
			id: 1,
			name: "iPhone",
			images: [{ id: 1, image: "http://image.png" }],
			price: 100,
			category_id: 5,
			description: "",
			quantity: 99,
			category: {
				id: 1,
				name: "Smartphoes",
				slug: "smartphones",
				parent_id: 5,
			},
		};
	});

	test("should display the product data", () => {
		render(<ProductCard product={product} />);

		expect(screen.getByText("iPhone")).toBeInTheDocument();
		expect(screen.getByText(100)).toBeInTheDocument();
	});

	test("should call ADD_PRODUCTS dispatch and disable btn", async () => {
		store.dispatch = jest.fn();

		render(<ProductCard product={product} />);

		let addToCartBtn = screen.getByTestId("addToCartBtn");
		await userEvent.click(addToCartBtn);

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(addToCartBtn).toHaveAttribute("disabled");
	});

	test("should call ADD_PRODUCT_TO_WISHLIST dispatch and disable btn", async () => {
		store.dispatch = jest.fn();

		render(<ProductCard product={product} />);

		let addToWishlistBtn = screen.getByTestId("addToWishlistBtn");
		await userEvent.click(addToWishlistBtn);

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(addToWishlistBtn).toHaveAttribute("disabled");
	});
});
