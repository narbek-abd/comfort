import { screen, waitFor, render } from "@testing-library/react";
import UniqueProduct from "./index";

describe("UniqueProduct component", () => {

	test("should display component", async () => {
		const {container} = render(<UniqueProduct />);

		expect(container).toMatchInlineSnapshot(`
<div>
  <section
    class="sc-pVTFL dnImWP"
  >
    <div
      class="sc-bdvvtL gFjKpS"
    >
      <div
        class="sc-jrQzAO iatmMh"
      >
        <div
          class="sc-kDTinF ckLbLH"
        >
          <img
            alt="unique product"
            src="unique-product.jpg"
          />
        </div>
        <div
          class="sc-iqseJM bWRFez"
        >
          <h2
            class="sc-gsDKAQ eeQIaO"
          >
            Unique Features Of leatest & Trending Poducts
          </h2>
          <ul>
            <li>
              All frames constructed with hardwood solids and laminates
            </li>
            <li>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </li>
            <li>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
`); 
	});
});
