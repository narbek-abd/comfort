import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./index";

test("should not display a list", () => {
	render(
		<Dropdown title="toggler">
			<li>1</li>
		</Dropdown>
	);

	expect(screen.queryByText("1")).not.toBeInTheDocument();
});

test("should display the list when toggler is clicked", async () => {
	render(
		<Dropdown title="toggler">
			<li>1</li>
		</Dropdown>
	);

	let btn = screen.getByText("toggler");

	await userEvent.click(btn);

	let list = screen.getByText("1");

	expect(list).toBeInTheDocument();
});
