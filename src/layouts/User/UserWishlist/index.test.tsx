import { screen } from "@testing-library/react";
import { render, store } from "../../../test/test-utils";
import { addProductToWishlist } from "../../../store/action-creators/Wishlist";
import UserWishlist from "./index";
import axios from "axios";

describe("UserWishlist component", () => {
	beforeAll(() => {
		store.dispatch(addProductToWishlist(77));
	});

	beforeEach(() => {
		axios.get.mockImplementation((url, params) => {
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
		render(<UserWishlist />);

		expect(await screen.findByText(/Iphone/i)).toBeInTheDocument();
		expect(await screen.findByText(/phones/i)).toBeInTheDocument();
	});
});
