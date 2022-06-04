import { screen, waitFor, render } from "@testing-library/react";
import Advantages from "./index";

describe("Advantages component", () => {

	test("should display component", async () => {
		const {container} = render(<Advantages />);

		expect(container).toMatchSnapshot(); 
	});
});
