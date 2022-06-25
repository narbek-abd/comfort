import { screen } from "@testing-library/react";
import { render, store } from "test/test-utils";
import "test/mock";
import Comments from "./index";
import axios from "axios";
import { setUser } from "store/action-creators/User";
import { UserActionTypes } from "types/UserReduxTypes";

describe("Comments component", () => {
	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: {
					data: [
						{
							id: 1,
							user_id: 1,
							name: "Alan",
							created_at: "20.02.2022",
							text: "Hello",
							replies: [
								{
									id: 2,
									user_id: 2,
									name: "John",
									created_at: "20.02.2022",
									text: "Hi",
								},
							],
						},
					],
					next_page_url: null,
				},
			});
		});
	});

	test("should display comments", async () => {
		render(<Comments product_id={99} />);

		expect(await screen.findByText("Alan")).toBeInTheDocument();
		expect(await screen.findByText("John")).toBeInTheDocument();
		expect(await screen.findByText("Hello")).toBeInTheDocument();
		expect(await screen.findByText("Hi")).toBeInTheDocument();
	});

	test("should display edit and delete buttons for the comment author", async () => {
		render(<Comments product_id={99} />);

		store.dispatch({
			type: UserActionTypes.SET_USER,
			payload: { id: 1, name: "Alan", email: "alan@mail.ru" },
		});

		expect(await screen.findByText(/edit/i)).toBeInTheDocument();
		expect(await screen.findByText(/delete/i)).toBeInTheDocument();
	});
});
