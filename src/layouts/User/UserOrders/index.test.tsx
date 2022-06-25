import { screen } from "@testing-library/react";
import { render } from "test/test-utils";
import userEvent from "@testing-library/user-event";
import UserOrders from "./index";
import axios from "axios";

describe("UserOrders component", () => {

	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: {
					data: [
						{
							id: 1,
							name: "Alan",
							email: "alan@mail.ru",
							adress: "my address",
							quantity: 12,
							products: [
								{
									id: 1,
									name: "Iphone",
									price: 123,
									quantity: 12,
									category: {
										name: "phones",
									},
									images: [
										{ id: 1, image: "https://image.png" },
									],
								},
							],
						},
					],
					total: 50,
				},
			});
		});
	});

	test("should display list", async () => {
		render(<UserOrders />);

		expect(await screen.findByText("Alan")).toBeInTheDocument();
		expect(await screen.findByText("alan@mail.ru")).toBeInTheDocument();
	});
});
