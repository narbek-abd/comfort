import { screen, waitFor, render } from "@testing-library/react";
import Footer from "./index";

describe("Footer component", () => {

	test("should display component", async () => {
		const {container} = render(<Footer />);

		expect(container).toMatchInlineSnapshot(`
<div>
  <footer
    class="sc-bdvvtL gaHnNG"
  >
    <div
      class="sc-dkPtRN jvuslv"
    >
      <div
        class="sc-gsDKAQ frXKzY"
      >
        © 2022 Designthemes. All Rights Reserved.
      </div>
    </div>
  </footer>
</div>
`); 
	});
});
