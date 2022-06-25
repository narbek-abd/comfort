import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render, history } from "test/test-utils";
import ProductsFilterSidebar from "./index";
import { CategoryTypes } from "types/CategoryTypes";

describe("ProductsFilterSidebar component", () => {
	let categoryChildrens: CategoryTypes[];

	beforeAll(() => {
		categoryChildrens = [
			{
				id: 1,
				name: "Smartphoes",
				slug: "smartphoes",
				parent_id: 0,
			},
			{
				id: 2,
				name: "Ihpones",
				slug: "ihpones",
				parent_id: 0,
			},
		];

		URLSearchParams.prototype, "get";
	});

	test("should display categories", async () => {
		render(<ProductsFilterSidebar categoryChildrens={categoryChildrens} />);

		expect(await screen.findByText("Smartphoes")).toBeInTheDocument();
		expect(await screen.findByText("Ihpones")).toBeInTheDocument();
	});

	test("should change the query params on submit", async () => {
		render(<ProductsFilterSidebar categoryChildrens={categoryChildrens} />);

		await userEvent.type(screen.getByLabelText("from"), "12");
		await userEvent.type(screen.getByLabelText("to"), "100");
		await userEvent.click(screen.getByLabelText("in stock"));
		await userEvent.click(screen.getByLabelText("out of stock"));

		await userEvent.click(screen.getByText(/apply/i));

		await waitFor(() => {
			expect(history.location.search).toBe(
				"?price_from=12&price_to=100&in_stock=on&out_of_stock=on"
			);
		});
	});
});
