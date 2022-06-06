import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryEdit from "./index";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

describe("CategoryEdit component", () => {
	let history: any;

	beforeAll(() => {
		history = createMemoryHistory();
		history.push("/admin/categories/edit/1");
	});

	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: [{ id: 1, name: "books" }],
			});
		});

		(axios.put as jest.Mock).mockImplementation(() => Promise.resolve(1));
	});

	test("should display form", async () => {
		render(
			<Router location={history.location} navigator={history}>
				<Routes>
					<Route
						path="/admin/categories/edit/:categoryid"
						element={<CategoryEdit />}
					/>
				</Routes>
			</Router>
		);

		await waitFor(async () => {
			expect(await screen.getByDisplayValue("books")).toBeInTheDocument();
			expect(await screen.findByText(/submit/i)).toBeInTheDocument();
		});
	});
});
