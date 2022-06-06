import { screen } from "@testing-library/react";
import { render } from "../../../test/test-utils";
import userEvent from "@testing-library/user-event";
import SearchBar from "./index";
import axios from "axios";

describe("Header SearchBar component", () => {
	beforeAll(() => {});

	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() =>
			Promise.resolve({
				data: [
					{
						id: 1,
						name: "Iphone",
						price: 123,
						quantity: 12,
						category: {
							name: "phones",
						},
						images: [{ id: 1, image: "https://image.png" }],
					},
				],
			})
		);
	});

	test("should make a request after 500ms when the input has been changed", async () => {
		render(<SearchBar />);

		userEvent.type(screen.getByDisplayValue(""), "Ipho");
		expect(await screen.findByText(/Iphone/i)).toBeInTheDocument();
	});
});
