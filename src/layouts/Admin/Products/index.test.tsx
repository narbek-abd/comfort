import { screen, waitFor } from "@testing-library/react";
import { render } from "../../../test/test-utils";
import userEvent from "@testing-library/user-event";
import Products from "./index";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

describe("Admin Products component", () => {
	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => {
			return Promise.resolve({
				data: {
					data: [
						{
							id: 1,
							name: "Iphone",
							price: 123,
							quantity: 12,
							category: {
								name: "phones",
							},
							images: [{ id: 1, image: "https://image.png" }],
						},
					],
					total: 50,
				},
			});
		});
	});

	test("should display list", async () => {
		render(<Products />);

		expect(await screen.findByText("Iphone")).toBeInTheDocument();
		expect(await screen.findByText("phones")).toBeInTheDocument();
		expect(await screen.findByText(/edit/i)).toBeInTheDocument();
		expect(await screen.findByText(/delete/i)).toBeInTheDocument();
	});
});
