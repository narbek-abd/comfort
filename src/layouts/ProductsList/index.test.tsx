import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductsList from "./index";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";
import { store } from "../../store";
import { Provider } from "react-redux";
import { mockMatchmeda } from "../../test/mock";

describe("ProductsList component", () => {
	let history: any;

	beforeAll(() => {
		history = createMemoryHistory();
		history.push("/catalog");

		mockMatchmeda(900);
	});
	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation((url) => {
			switch (url) {
				case "/categories":
					return Promise.resolve({
						data: [
							{
								id: 1,
								name: "Books",
								children: [
									{
										id: 2,
										name: "Hardcover",
									},
								],
							},
						],
					});
				case "/products/list?limit=6&sort_by=new&&":
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
									images: [
										{ id: 1, image: "https://image.png" },
									],
								},
							],
							total: 50,
						},
					});
			}
		});
	});

	test("should display the products list", async () => {
		render(
			<Provider store={store}>
				<Router location={history.location} navigator={history}>
					<Routes>
						<Route path="/catalog" element={<ProductsList />} />
					</Routes>
				</Router>
			</Provider>
		);

		await waitFor(() => {
			expect(screen.getByText("Iphone")).toBeInTheDocument();
		});
	});
});
