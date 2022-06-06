import { screen, waitFor, render } from "@testing-library/react";
import MainSlider from "./index";

describe("MainSlider component", () => {

	test("should display component", async () => {
		const {container} = render(<MainSlider />);

		expect(container).toMatchSnapshot(); 
	});
});
