import { render, screen, fireEvent } from "@testing-library/react";
import BottomNavBar from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("should find active tab id by current location", () => {
	test.each([
		["/", "home"],
		["/user/wishlist", "wishlist"],
	])(".add(%i, %i)", async (route, activeRouteName) => {
		const history = createMemoryHistory();

		history.push(route);
		render(
			<Router location={history.location} navigator={history}>
				<BottomNavBar />
			</Router>
		);
		expect(await screen.findByTestId(activeRouteName)).toBeInTheDocument();
	});
});
