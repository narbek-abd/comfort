import { screen } from "@testing-library/react";
import { render, store } from "../../../test/test-utils";
import "../../../test/mock";
import HeaderTop from "./index";
import axios from "axios";
import { setUser } from "../../../store/action-creators/User";
import { addProductToWishlist } from "../../../store/action-creators/Wishlist";
import { addProduct } from "../../../store/action-creators/Cart";

describe("HeaderTop component", () => {
	test("should display the login button if the user is not authentificated", async () => {
		render(<HeaderTop />);

		expect(await screen.findByText(/login/i)).toBeInTheDocument();
	});

	test("should display the user naem if the user is authentificated", async () => {
		render(<HeaderTop />);

		store.dispatch(setUser({ id: 1, name: "Alan" }));

		expect(await screen.findByText("Alan")).toBeInTheDocument();
	});

	test("should display the wishlist products quantity", async () => {
		render(<HeaderTop />);

		store.dispatch(addProductToWishlist(2));

		expect(await screen.findByText(1)).toBeInTheDocument();
	});

	test("should display the cart products quantity", async () => {
		render(<HeaderTop />);

		store.dispatch(addProduct(2));
		store.dispatch(addProduct(3));

		expect(await screen.findByText(2)).toBeInTheDocument();
	});
});
