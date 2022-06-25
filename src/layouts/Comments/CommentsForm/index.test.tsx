import { screen } from "@testing-library/react";
import { render } from "test/test-utils";
import CommentsForm from "./index";

describe("CommentsForm component", () => {

	test("should display the comments form", () => {
		render(<CommentsForm product_id={99} onSubmit={() => {}} />);

		expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
		expect(screen.getByText(/submit/i)).toBeInTheDocument();
	});

	test("should display the editing text", () => {
		render(
			<CommentsForm
				product_id={99}
				onSubmit={() => {}}
				editingText="wow"
			/>
		);

		expect(screen.getByDisplayValue(/wow/i)).toBeInTheDocument();
	});
});
