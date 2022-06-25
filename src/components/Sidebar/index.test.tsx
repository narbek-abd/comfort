import { screen } from "@testing-library/react";
import { render } from "../../test/test-utils";
import Sidebar, {SidebarItemType} from "./index";

describe("Sidebar component", () => {
	let sidebarList: SidebarItemType[];

	beforeAll(() => {
		sidebarList = [
			{
				id: 1,
				name: "products",
				icon: "arrow",
				children: [{ id: 2, name: "all products", link: "products" }],
			},
		];
	});

	test("should display list", () => {
		render(<Sidebar list={sidebarList} />);

		expect(screen.getByText("products")).toBeInTheDocument();
		expect(screen.getByText("all products")).toBeInTheDocument();
	});
});
