import { render, screen } from "@testing-library/react";
import MultiMenu from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

let list;
let history;

describe("MultiMenu component", () => {
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

	test("should display list", () => {
		render(
			<Router location={history.location} navigator={history}>
				<MultiMenu list={list} />
			</Router>
		);

		expect(screen.getAllByText("Books")[0]).toBeInTheDocument();
	});
});
