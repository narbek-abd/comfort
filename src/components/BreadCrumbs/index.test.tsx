import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import BreadCrumbs from "./index";
import { Router } from "react-router-dom";

test("should generate breadcrumbs by location if custom routes are not passed", async () => {
	const history = createMemoryHistory();
	history.push("user/login");

	render(
		<Router location={history.location} navigator={history}>
			<BreadCrumbs />
		</Router>
	);
	expect(await screen.findByText(/user/i)).toBeInTheDocument();
	expect(await screen.findByText(/login/i)).toBeInTheDocument();
});

test("should generate breadcrumbs by passed custom routes", async () => {
	const history = createMemoryHistory();
	history.push("doesn't/matter");

	const customRoutes = [{ name: "Register", url: "/Register" }];

	render(
		<Router location={history.location} navigator={history}>
			<BreadCrumbs routes={customRoutes} />
		</Router>
	);

	expect(await screen.findByText(/Register/i)).toBeInTheDocument();
});
