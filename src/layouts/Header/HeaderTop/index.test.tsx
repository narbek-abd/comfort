import { screen } from "@testing-library/react";
import { render, store } from "../../../test/test-utils";
import "../../../test/mock";
import HeaderTop from "./index";
import axios from "axios";
import { setUser } from "../../../store/action-creators/User";
import { addProductToWishlist } from "../../../store/action-creators/Wishlist";
import { addProduct } from "../../../store/action-creators/Cart";
import { CartActionTypes } from "../../../types/CartReduxTypes";
import { WishlistActionTypes } from "../../../types/WishlistReduxTypes";
import { UserActionTypes } from "../../../types/UserReduxTypes";

describe("HeaderTop component", () => {
	test("should display the login button if the user is not authentificated", async () => {
		render(<HeaderTop />);

		expect(await screen.findByText(/login/i)).toBeInTheDocument();
	});

	test("should display the user naem if the user is authentificated", async () => {
		render(<HeaderTop />);

		store.dispatch({
			type: UserActionTypes.SET_USER,
			payload: { id: 1, name: "Alan", email: "alan@mail.ru" },
		});

		expect(await screen.findByText("Alan")).toBeInTheDocument();
	});

	test("should display the wishlist products quantity", async () => {
		render(<HeaderTop />);

		store.dispatch({
			type: WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST,
			payload: 2,
		});

		expect(await screen.findByText(1)).toBeInTheDocument();
	});

	test("should display the cart products quantity", async () => {
		render(<HeaderTop />);

		store.dispatch({
			type: CartActionTypes.ADD_PRODUCTS,
			payload: 3,
		});

		store.dispatch({
			type: CartActionTypes.ADD_PRODUCTS,
			payload: 2,
		});

		expect(await screen.findByText(2)).toBeInTheDocument();
	});
});
