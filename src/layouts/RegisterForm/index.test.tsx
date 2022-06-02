import { screen, waitFor } from "@testing-library/react";
import { render, store } from "../../test/test-utils";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./index";
import axios from "axios";

describe("RegisterForm component", () => {
	beforeAll(() => {});

	beforeEach(() => {
		axios.post.mockImplementation(() =>
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
		render(<RegisterForm />);

		await userEvent.type(screen.getByPlaceholderText(/name/i), "Alan");

		await userEvent.type(
			screen.getByPlaceholderText(/email/i),
			"alan@mail.ru"
		);
		await userEvent.type(screen.getByPlaceholderText("Password"), "wow123");

		await userEvent.type(
			screen.getByPlaceholderText("Confirm password"),
			"wow123"
		);

		await userEvent.click(screen.getByText(/submit/i));

		await waitFor(() => {
			expect(store.getState().user.data.id).toBe(1);
		});
	});

	test("should validate the form", async () => {
		render(<RegisterForm />);

		await userEvent.type(screen.getByPlaceholderText(/email/i), "blabla");

		await userEvent.click(screen.getByText(/submit/i));

		expect(
			await screen.findByText("password must be at least 3 characters")
		).toBeInTheDocument();
		expect(
			await screen.findByText(
				"password_confirmation must be at least 3 characters"
			)
		).toBeInTheDocument();
	});
});
