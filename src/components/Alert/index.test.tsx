import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "./index";

test("should render text", () => {
	render(<Alert variant="success">message</Alert>);

	expect(screen.getByText('message')).toBeInTheDocument();
});


test("should hide the text when button is clicked", () => {
	render(<Alert variant="success">message</Alert>);

	let btn = screen.getByRole('button');

	fireEvent.click(btn);

	let text = screen.queryByText('message');

	expect(text).not.toBeInTheDocument();
});
