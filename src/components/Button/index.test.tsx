import { render, screen } from "@testing-library/react";
import Button from "./index";

test("should render text", () => {
	render(<Button>message</Button>);

	expect(screen.getByText("message")).toBeInTheDocument();
});

test("should be disabled during loading", () => {
	const { getByRole } = render(<Button isLoading={true}>message</Button>);

	expect(getByRole("button")).toHaveAttribute("disabled");
});

test("should render spinner during loading", () => {
	const { getByTestId } = render(<Button isLoading={true}>message</Button>);

	expect(getByTestId("spinner")).toBeInTheDocument();
});

