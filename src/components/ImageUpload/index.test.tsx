import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageUpload from "./index";
import { UploadedImageTypes } from "../../types/ImageTypes";

describe("ImageUpload componenet", () => {
	let file: File;

	beforeAll(() => {
		file = new File(["hello"], "hello.png", { type: "image/png" });
		global.URL.createObjectURL = jest.fn();
	});

	test("should upload a file", async () => {
		render(<ImageUpload onUpload={() => {}} />);

		let uploadInput = screen.getByTestId("uploadInput");

		await userEvent.upload(uploadInput, file);

		expect((uploadInput as HTMLInputElement).files[0]).toBe(file);
		expect((uploadInput as HTMLInputElement).files).toHaveLength(1);
	});

	test("should return image list to the callback function when image is uploaded", async () => {
		function callback(imageList: UploadedImageTypes[]) {
			expect(imageList[0].img).toBe(file);
		}

		render(<ImageUpload onUpload={callback} />);

		let uploadInput = screen.getByTestId("uploadInput");

		await userEvent.upload(uploadInput, file);
	});

	test("should return image list to the callback function when remove button is clicked", async () => {
		let calls = 0;

		function callback(imageList: UploadedImageTypes[]) {
			if (calls === 0) {
				calls = 1;
				return;
			}

			expect(imageList).toHaveLength(0);
		}

		render(<ImageUpload onUpload={callback} />);

		let uploadInput = screen.getByTestId("uploadInput");
		await userEvent.upload(uploadInput, file);

		let removeBtn = screen.getByRole("button");
		await userEvent.click(removeBtn);
	});

	test("should display uploaded image", async () => {
		render(<ImageUpload onUpload={() => {}} />);

		let uploadInput = screen.getByTestId("uploadInput");

		await userEvent.upload(uploadInput, file);

		let uploadedImage = screen.getByTestId("uploadedImage");
		expect(uploadedImage).toBeInTheDocument();
	});

	test("should hide removed image", async () => {
		render(<ImageUpload onUpload={() => {}} />);

		let uploadInput = screen.getByTestId("uploadInput");
		await userEvent.upload(uploadInput, file);

		let removeBtn = screen.getByRole("button");
		await userEvent.click(removeBtn);

		let uploadedImage = screen.queryByTestId("uploadedImage");
		expect(uploadedImage).not.toBeInTheDocument();
	});
});
