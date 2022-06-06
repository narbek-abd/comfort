import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Counter from "./index";

test("should render current value", () => {
	render(<Counter max={4} min={0} current={1} onChange={() => {}}/>);

	const input = screen.getByDisplayValue(1);

	expect(input).toBeInTheDocument();
});



test("should increment a number", async () => {
	render(<Counter max={4} min={0} current={1} onChange={() => {}}/>);

	const plusBtn = screen.getByText(/\+/i);

	await userEvent.click(plusBtn);

	const input = screen.getByDisplayValue(2);

	expect(input).toBeInTheDocument();
});


test("should decrement a number", async () => {
	render(<Counter max={4} min={0} current={2} onChange={() => {}}/>);

	const minusBtn = screen.getByText(/\-/i);

	await userEvent.click(minusBtn);

	const input = screen.getByDisplayValue(1);

	expect(input).toBeInTheDocument();
});



test("should disable an increment button when max value has been reached", async () => {
	render(<Counter max={4} min={0} current={3} onChange={() => {}}/>);

	const plusBtn = screen.getByText(/\+/i);

	await userEvent.click(plusBtn);

	expect(plusBtn).toHaveAttribute('disabled');
});



test("should disable a decrement button when min value has been reached", async () => {
	render(<Counter max={4} min={0} current={1} onChange={() => {}}/>);

	const minusBtn = screen.getByText(/\-/i);

	await userEvent.click(minusBtn);

	expect(minusBtn).toHaveAttribute('disabled');
});

