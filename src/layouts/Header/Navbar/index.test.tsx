import { screen } from "@testing-library/react";
import { render } from "../../../test/test-utils";
import Navbar from "./index";
import CatalogBar from "../CatalogBar";
import axios from "axios";

jest.mock("../CatalogBar", () => {
	return {
		__esModule: true,
		default: () => {
			return <></>;
		},
	};
});

describe("Header Navbar component", () => {
	beforeAll(() => {
		global.matchMedia = (media) => ({
			addListener: () => {},
			removeListener: () => {},
			matches: media === "(max-width: 900px)",
		});
	});

	beforeEach(() => {
		axios.get.mockImplementation(() => Promise.resolve({}));
	});

	test("should display the navbar list", async () => {
		render(<Navbar />);

		expect(await screen.findByText(/home/i)).toBeInTheDocument();
		expect(await screen.findByText(/user/i)).toBeInTheDocument();
		expect(await screen.findByText(/wishlist/i)).toBeInTheDocument();
		expect(await screen.findByText(/cart/i)).toBeInTheDocument();
	});
});
