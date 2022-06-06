import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryCreate from "./index";
import axios from "axios";

describe("CategoryCreate component", () => {
	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: [{ id: 1, name: "books" }],
			});
		});

		(axios.post as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: { id: 2, name: "new category" },
			});
		});
	});

	test("should display form", async () => {
		render(<CategoryCreate />);

		expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
		expect(await screen.findByText("books")).toBeInTheDocument();
		expect(screen.getByText(/submit/i)).toBeInTheDocument();
	});

	test("should append the created category to the list", async () => {
		render(<CategoryCreate />);

		fireEvent.change(screen.getByPlaceholderText("name"), {
			target: { value: "new category" },
		});

		fireEvent.submit(screen.getByText(/submit/i));

		await waitFor(() => {
			expect(screen.getByText("new category")).toBeInTheDocument();
		});
	});
});
