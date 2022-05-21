import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CatalogMenu from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

let list;
let history;

beforeAll(() => {
	history = createMemoryHistory();

	list = [
		{
			id: 1,
			name: "Books",
			slug: "books",
			children: [{ subid: 1, name: "Hardcover", slug: "hardcover" }],
		},
		{
			id: 2,
			name: "Movies",
			slug: "Movies",
			children: [{ subid: 4, name: "DVD", slug: "dvd" }],
		},
	];
});

test("should render list", () => {
	render(
		<Router location={history.location} navigator={history}>
			<CatalogMenu list={list}>message</CatalogMenu>
		</Router>
	);

	expect(screen.getByText("Books")).toBeInTheDocument();
});

test("should not render unselected sub list", () => {
	render(
		<Router location={history.location} navigator={history}>
			<CatalogMenu list={list}>message</CatalogMenu>
		</Router>
	);

	expect(screen.queryByText("DVD")).not.toBeInTheDocument();
});

test("should render sub list on hover", async () => {
	render(
		<Router location={history.location} navigator={history}>
			<CatalogMenu list={list}>message</CatalogMenu>
		</Router>
	);

	const dvdCategoryParent = screen.getByText("Movies");
	await userEvent.hover(dvdCategoryParent);

	expect(screen.getByText("DVD")).toBeInTheDocument();
});
