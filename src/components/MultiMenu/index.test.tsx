import { render, screen } from "@testing-library/react";
import MultiMenu from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { CategoryTypes } from "../../types/CategoryTypes";

let list: CategoryTypes[];
let history: any;

describe("MultiMenu component", () => {
	beforeAll(() => {
		history = createMemoryHistory();

		list = [
			{
				id: 1,
				name: "Books",
				slug: "books",
				parent_id: 5,
				children: [{ id: 1, name: "Hardcover", slug: "hardcover", parent_id: 1 }],
			},
			{
				id: 2,
				name: "Movies",
				slug: "Movies",
				parent_id: 5,
				children: [{ id: 4, name: "DVD", slug: "dvd", parent_id: 2 }],
			},
		];
	});

	test("should display list", () => {
		render(
			<Router location={history.location} navigator={history}>
				<MultiMenu list={list} />
			</Router>
		);

		expect(screen.getAllByText("Books")[0]).toBeInTheDocument();
	});
});
