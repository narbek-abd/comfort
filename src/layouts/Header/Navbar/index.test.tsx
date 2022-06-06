import { screen } from "@testing-library/react";
import { render } from "../../../test/test-utils";
import { mockMatchmeda } from "../../../test/mock";
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
		mockMatchmeda(900);
	});

	beforeEach(() => {
		(axios.get as jest.Mock).mockImplementation(() => Promise.resolve({}));
	});

	test("should display the navbar list", async () => {
		render(<Navbar />);

		expect(await screen.findByText(/home/i)).toBeInTheDocument();
		expect(await screen.findByText(/user/i)).toBeInTheDocument();
		expect(await screen.findByText(/wishlist/i)).toBeInTheDocument();
		expect(await screen.findByText(/cart/i)).toBeInTheDocument();
	});
});
