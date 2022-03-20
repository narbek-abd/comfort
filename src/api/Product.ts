import axiosClient from "./axiosClient";

export function createProduct(formData: any) {
	return axiosClient.post("/products", formData);
}
