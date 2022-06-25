import { screen, waitFor } from "@testing-library/react";
import { render, store } from "../../test/test-utils";
import { addProduct } from "../../store/action-creators/Cart";
import { CartActionTypes } from "../../types/CartReduxTypes";
import { setUser } from "../../store/action-creators/User";
import { UserActionTypes } from "../../types/UserReduxTypes";
import userEvent from "@testing-library/user-event";
import OrderForm from "./index";
import axios from "axios";

describe("OrderForm component", () => {
	beforeEach(() => {
		(axios.post as jest.Mock).mockImplementation(() => Promise.resolve());
	});

	test("should send a request to create an order with the correct params", async () => {
		render(<OrderForm />);

		store.dispatch({
			type: CartActionTypes.ADD_PRODUCTS,
			payload: 99,
		});

		await submitForm();

		await waitFor(() => {
			expect(axios.post).toHaveBeenCalledWith("/orders", {
				email: "alan@mail.ru",
				address: "my address",
				name: "Alan",
				products: [
					{
						id: 99,
						quantity: 1,
					},
				],
			});
		});
	});

	test("should clear the cart after sending the request", async () => {
		render(<OrderForm />);
		
		store.dispatch({
			type: CartActionTypes.ADD_PRODUCTS,
			payload: 99,
		});

		await submitForm();

		await waitFor(() => {
			expect(store.getState().cart.products).toEqual([]);
		});
	});

	test("should set default values if the user is authentificated", async () => {
		render(<OrderForm />);

		store.dispatch({
			type: UserActionTypes.SET_USER,
			payload: { id: 1, name: "Alan", email: "alan@mail.ru" },
		});

		expect(await screen.findByDisplayValue("Alan"));
		expect(await screen.findByDisplayValue("alan@mail.ru"));
	});

	async function submitForm() {
		await userEvent.type(screen.getByPlaceholderText(/name/i), "Alan");
		await userEvent.type(
			screen.getByPlaceholderText(/email/i),
			"alan@mail.ru"
		);
		await userEvent.type(
			screen.getByPlaceholderText(/address/i),
			"my address"
		);

		await userEvent.click(screen.getByText(/submit/i));
	}
});
