import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./index";

describe("Modal component", () => {
	test("should display modal content", () => {
		render(
			<Modal isOpen={true} onClose={() => {}}>
				message
			</Modal>
		);

		expect(screen.getByText("message")).toBeInTheDocument();
	});


	test("should call onClose function on click outside", async () => {
		const handleClose = jest.fn()

		render(
			<Modal isOpen={true} onClose={handleClose}>
				message
			</Modal>
		);

		await userEvent.click(document.body);

		expect(handleClose).toHaveBeenCalledTimes(1)
	});
});
