import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectNested from "./index";

describe("SelectNested component", () => {
	let nestedCategories;

	beforeAll(() => {
		nestedCategories = [
			{
				id: 1,
				name: "Books",
				children: [
					{
						id: 2,
						name: "Hardcover",
						children: [
							{
								id: 3,
								name: "Others",
							},
						],
					},
				],
			},
		];
	});

	test("should return last level option to the callback", async () => {
		function callback(lastLevelOption) {
			expect(lastLevelOption.name).toBe("Others");
		}

		render(
			<SelectNested
				list={nestedCategories}
				name="selectName"
				onSelected={callback}
			/>
		);

		await userEvent.selectOptions(screen.getByTestId(1), "Books");
		await userEvent.selectOptions(screen.getByTestId(2), "Hardcover");
		await userEvent.selectOptions(screen.getByTestId(3), "Others");
	});
});
