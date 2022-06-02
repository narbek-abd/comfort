import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render, history } from "../../../test/test-utils";
import ProductsSort from "./index";

describe("ProductsSort component", () => {
	test("should change the query params when selecting the option", async () => {
		render(<ProductsSort />);

		await userEvent.click(await screen.findByText("New"));
		await userEvent.click(await screen.findByText("Price: Low to High"));

		await waitFor(() => {
			expect(history.location.search).toBe("?sort_by=price_low_to_high");
		});
	});
});
