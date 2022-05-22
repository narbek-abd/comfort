import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

let list;
let history;

jest.mock("");

describe("Pagination component", () => {
	beforeAll(() => {
		history = createMemoryHistory();
	});

	test("should display pagination", () => {
		render(
			<Router location={history.location} navigator={history}>
				<Pagination totalItem={50} perPage={5} />
			</Router>
		);

		[1, 2, 3, 4, 5, 6, 7, 10].forEach((page) => {
			expect(screen.getByText(page)).toBeInTheDocument();
		});
	});

	test("should display pagination by rangeCount", () => {
		render(
			<Router location={history.location} navigator={history}>
				<Pagination totalItem={50} perPage={5} rangeCount={10} />
			</Router>
		);

		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((page) => {
			expect(screen.getByText(page)).toBeInTheDocument();
		});
	});

	test("should change the ?page= query param", async () => {
		render(
			<Router location={history.location} navigator={history}>
				<Pagination totalItem={50} perPage={5} />
			</Router>
		);

		let page = screen.getByText(7);
		await userEvent.click(page);

		expect(history.location.search).toBe("?page=7");
	});

	test("should select an active item according to the location ?page= query param", async () => {
		history.push({ search: "?page=7" });

		render(
			<Router location={history.location} navigator={history}>
				<Pagination totalItem={50} perPage={5} />
			</Router>
		);

		let activeItem = screen.getByTestId(7);

		expect(activeItem).toBeInTheDocument();
	});
});
