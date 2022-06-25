import { screen } from "@testing-library/react";
import {render} from "test/test-utils";
import FeaturedProducts from "./index";
import axios from "axios";

describe("FeaturedProducts component", () => {
	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: {
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
				},
				status: 200,
			});
		});
	});

	test("should display component", async () => {
		const { container } = render(<FeaturedProducts />);

		expect(await screen.findByText("Iphone")).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
