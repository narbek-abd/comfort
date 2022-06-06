import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductEdit from "./index";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

describe("ProductEdit component", () => {
	let history: any;
	beforeAll(() => {
		history = createMemoryHistory();
		history.push("/admin/products/edit/1");
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
				case "/products/1":
					return Promise.resolve({
						status: 200,
						data: {
							id: 1,
							name: "Iphone",
							price: 123,
							quantity: 12,
							category: {
								name: "phones",
							},
							images: [{ id: 1, image: "https://image.png" }],
						},
					});
			}
		});

		(axios.post as jest.Mock).mockImplementation(() => Promise.resolve());
	});

	test("should display form", async () => {
		render(
			<Router location={history.location} navigator={history}>
				<Routes>
					<Route
						path="/admin/products/edit/:productid"
						element={<ProductEdit />}
					/>
				</Routes>
			</Router>
		);

		expect(await screen.findByPlaceholderText("name")).toBeInTheDocument();
		expect(await screen.findByPlaceholderText("price")).toBeInTheDocument();

		expect(
			await screen.findByPlaceholderText("quantity")
		).toBeInTheDocument();

		expect(await screen.findByText("Change category")).toBeInTheDocument();

		expect(
			await screen.findByText("Select product images")
		).toBeInTheDocument();

		expect(await screen.findByText(/submit/i)).toBeInTheDocument();
	});

	test("should set default values", async () => {
		render(
			<Router location={history.location} navigator={history}>
				<Routes>
					<Route
						path="/admin/products/edit/:productid"
						element={<ProductEdit />}
					/>
				</Routes>
			</Router>
		);

		expect(await screen.findByDisplayValue("Iphone")).toBeInTheDocument();
		expect(await screen.findByDisplayValue(123)).toBeInTheDocument();
		expect(await screen.findByDisplayValue(12)).toBeInTheDocument();
	});

	test("should toggle NestedSelect component on click", async () => {
		render(
			<Router location={history.location} navigator={history}>
				<Routes>
					<Route
						path="/admin/products/edit/:productid"
						element={<ProductEdit />}
					/>
				</Routes>
			</Router>
		);

		let btn = await screen.findByText("Change category");

		await userEvent.click(btn);

		expect(await screen.findByText("Books"));
	});
});
