import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CatalogMenu from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { CategoryTypes } from "../../types/CategoryTypes";

let list: CategoryTypes[];
let history: any;

beforeAll(() => {
	history = createMemoryHistory();

	list = [
		{
			id: 1,
			name: "Books",
			slug: "books",
			parent_id: 5,
			children: [
				{ id: 1, name: "Hardcover", slug: "hardcover", parent_id: 1 },
			],
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

test("should render list", () => {
	render(
		<Router location={history.location} navigator={history}>
			<CatalogMenu list={list} /> 
		</Router>
	);

	expect(screen.getByText("Books")).toBeInTheDocument();
});

test("should not render unselected sub list", () => {
	render(
		<Router location={history.location} navigator={history}>
			<CatalogMenu list={list} />
		</Router>
	);

	expect(screen.queryByText("DVD")).not.toBeInTheDocument();
});

test("should render sub list on hover", async () => {
	render(
		<Router location={history.location} navigator={history}>
			<CatalogMenu list={list} />
		</Router>
	);

	const dvdCategoryParent = screen.getByText("Movies");
	await userEvent.hover(dvdCategoryParent);

	expect(screen.getByText("DVD")).toBeInTheDocument();
});
