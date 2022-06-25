import { screen } from "@testing-library/react";
import { render, store } from "test/test-utils";
import { WishlistActionTypes } from "types/WishlistReduxTypes";
import UserWishlist from "./index";
import axios from "axios";

describe("UserWishlist component", () => {
	beforeAll(() => {
		store.dispatch({
			type: WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST,
			payload: 77,
		});
	});

	beforeEach(() => {
		interface ParamsInterface {
			params: {
				ids: number[];
			};
		}

		(axios.get as jest.Mock).mockImplementation(
			(url: string, params: ParamsInterface) => {
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
			}
		);
	});

	test("should display list", async () => {
		render(<UserWishlist />);

		expect(await screen.findByText(/Iphone/i)).toBeInTheDocument();
		expect(await screen.findByText(/phones/i)).toBeInTheDocument();
	});
});
