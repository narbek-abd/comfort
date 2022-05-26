import { screen, waitFor } from "@testing-library/react";
import { render } from "../../../test/test-utils";
import userEvent from "@testing-library/user-event";
import Categories from "./index";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

describe("Admin Categories component", () => {
	beforeEach(() => {
		axios.get.mockImplementation(() => {
			return Promise.resolve({
				data: {
					data: [{ id: 1, name: "books" }],
					total: 50,
				},
			});
		});
	});

	test("should display list", async () => {
		render(<Categories />);

		expect(await screen.findByText("books")).toBeInTheDocument();
		expect(await screen.findByText(/edit/i)).toBeInTheDocument();
		expect(await screen.findByText(/delete/i)).toBeInTheDocument();
	});
});
