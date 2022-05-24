import { render, screen } from "@testing-library/react";
import Spinner from "./index";

describe("Spinner component", () => {
	test("should display spinner", () => {
		render(<Spinner />);

		expect(screen.getByTestId("spinner")).toBeInTheDocument();
	});
});
