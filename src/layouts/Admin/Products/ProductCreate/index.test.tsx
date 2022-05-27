import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCreate from "./index";
import axios from "axios";

describe("ProductCreate component", () => {
	let file;

	beforeAll(() => {
		file = new File(["hello"], "hello.png", { type: "image/png" });
		global.URL.createObjectURL = jest.fn();
		global.URL.revokeObjectURL = jest.fn();
	});

	beforeEach(() => {
		axios.get.mockImplementation(() => {
			return Promise.resolve({
				data: [
					{
						id: 1,
						name: "Books",
						children: [
							{
								id: 2,
								name: "Hardcover",
							},
						],
					},
				],
			});
		});

		axios.post.mockImplementation(() => Promise.resolve());
	});

	test("should display form", async () => {
		render(<ProductCreate />);

		await waitFor(() => {
			expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
			expect(screen.getByPlaceholderText("price")).toBeInTheDocument();
			expect(screen.getByPlaceholderText("quantity")).toBeInTheDocument();
			expect(
				screen.getByText("Select product images")
			).toBeInTheDocument();

			expect(screen.getByText("Books"));
			expect(screen.getByText(/submit/i)).toBeInTheDocument();
		});
	});

	test("should validate form", async () => {
		render(<ProductCreate />);

		fireEvent.submit(screen.getByText(/submit/i));

		await waitFor(() => {
			expect(
				screen.getByText(/name is a required field/i)
			).toBeInTheDocument();
			expect(
				screen.getByText(/you must specify a number/i)
			).toBeInTheDocument();
			expect(
				screen.getByText(/quantity must be a `number` type/i)
			).toBeInTheDocument();
		});
	});

	describe("ProductCreate manual validate", () => {
		let newProduct;

		beforeAll(() => {
			newProduct = { name: "new product", price: 123, quantity: 12 };
		});
		
		test("should setError for unselected category", async () => {
			render(<ProductCreate />);

			for (const [key, value] of Object.entries(newProduct)) {
				fireEvent.change(screen.getByPlaceholderText(key), {
					target: { value: value },
				});
			}

			fireEvent.submit(screen.getByText(/submit/i));

			await waitFor(() => {
				expect(
					screen.getByText(/Error: select product category/i)
				).toBeInTheDocument();
			});
		});

		test("should setError for unuploaded images", async () => {
			render(<ProductCreate />);

			for (const [key, value] of Object.entries(newProduct)) {
				fireEvent.change(screen.getByPlaceholderText(key), {
					target: { value: value },
				});
			}

			await waitFor(async () => {
				await userEvent.selectOptions(screen.getByTestId(1), "Books");
				await userEvent.selectOptions(
					screen.getByTestId(2),
					"Hardcover"
				);
			});

			fireEvent.submit(screen.getByText(/submit/i));

			await waitFor(() => {
				expect(
					screen.getByText(/Error: upload product images/i)
				).toBeInTheDocument();
			});
		});

		test("should create new product", async () => {
			render(<ProductCreate />);

			for (const [key, value] of Object.entries(newProduct)) {
				fireEvent.change(screen.getByPlaceholderText(key), {
					target: { value: value },
				});
			}

			await waitFor(async () => {
				await userEvent.selectOptions(screen.getByTestId(1), "Books");
				await userEvent.selectOptions(
					screen.getByTestId(2),
					"Hardcover"
				);
			});

			let uploadInput = screen.getByTestId("uploadInput");
			await userEvent.upload(uploadInput, file);

			fireEvent.submit(screen.getByText(/submit/i));

			await waitFor(() => {
				expect(
					screen.getByText(/Product was created successfully/i)
				).toBeInTheDocument();
			});
		});
	});
});
