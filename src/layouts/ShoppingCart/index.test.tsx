import { screen, waitFor } from "@testing-library/react";
import { render, store } from "test/test-utils";
import { addProduct } from "store/action-creators/Cart";
import { CartActionTypes } from "types/CartReduxTypes";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./index";
import axios from "axios";

describe("ShoppingCart component", () => {
	beforeAll(() => {
		store.dispatch({
			type: CartActionTypes.ADD_PRODUCTS,
			payload: 77,
		});
	});

	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation((url, params) => {
			if (url === "/products" && params.params.ids[0] === 77) {
				return Promise.resolve({
					data: [
						{
							id: 77,
							name: "Iphone",
							price: 123,
							quantity: 12,
							category: {
								name: "phones",
							},
							images: [{ id: 1, image: "https://image.png" }],
						},
					],
					status: 200,
				});
			}
		});
	});

	test("should display list", async () => {
		render(<ShoppingCart />);

		expect(await screen.findByText("Iphone")).toBeInTheDocument();
		expect(await screen.findByText("phones")).toBeInTheDocument();
	});

	test("should remove the product from the cart", async () => {
		render(<ShoppingCart />);

		await userEvent.click(
			await screen.findByTestId("shoppingCart-remove-btn")
		);

		expect(store.getState().cart.products).toEqual([]);
	});
});
