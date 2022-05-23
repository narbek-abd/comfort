// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ProductGallery from "./index";



// describe("ProductGallery component", () => {
// 	let imageItems;

// 	beforeAll(() => {
// 		imageItems = [
// 			{ id: 1, image: "https://image.png" },
// 			{ id: 2, image: "https://image.png" },
// 		];
// 	});

// 	test("should display image list", () => {
// 		render(<ProductGallery imageItems={imageItems} />);

// 		expect(screen.getByTestId(1)).toBeInTheDocument();
// 		expect(screen.getByTestId(2)).toBeInTheDocument();
// 	});

// 	test("should display main image", () => {
// 		render(<ProductGallery imageItems={imageItems} />);

// 		expect(screen.getByTestId(`main-${1}`)).toBeInTheDocument();
// 	});

// 	test("should change main image on click", async () => {
// 		render(<ProductGallery imageItems={imageItems} />);

// 		let secondImage = screen.getByTestId(2);

// 		userEvent.click(secondImage);

// 		expect(screen.getByTestId(`main-${2}`)).toBeInTheDocument();
// 	});
// });
