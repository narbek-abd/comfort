import { screen, waitFor } from "@testing-library/react";
import { render, store } from "test/test-utils";
import userEvent from "@testing-library/user-event";
import LoginForm from "./index";
import axios from "axios";

describe("LoginForm component", () => {
	beforeEach(() => {
		(axios.post as jest.Mock).mockImplementation(() =>
			Promise.resolve({
				data: {
					user: {
						id: 1,
						name: "Alan",
					},
					token: "qwerty",
				},
			})
		);
	});

	test("should add the user's data to the store when loging in", async () => {
		render(<LoginForm />);

		await userEvent.type(
			screen.getByPlaceholderText(/email/i),
			"alan@mail.ru"
		);
		await userEvent.type(
			screen.getByPlaceholderText(/password/i),
			"wow123"
		);

		await userEvent.click(screen.getByText(/submit/i));

		await waitFor(() => {
			expect(store.getState().user.data.id).toBe(1);
		});
	});

	test("should validate the form", async () => {
		render(<LoginForm />);

		await userEvent.type(screen.getByPlaceholderText(/email/i), "blabla");

		await userEvent.click(screen.getByText(/submit/i));

		expect(
			await screen.findByText("password is a required field")
		).toBeInTheDocument();
		expect(
			await screen.findByText("email must be a valid email")
		).toBeInTheDocument();
	});
});
