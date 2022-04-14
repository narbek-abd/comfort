import axiosClient, { webAxiosClient } from "./axiosClient";
import axios from "axios";

export function getProducts() {
	return axiosClient.get("/products/list");
}

export function createProduct(formData: any) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.post("/products", formData);
	});
}

export function updateProduct(id: number, formData: any) {
	// Laravel не принимает formData в axios.put методе, так что отправляем как post, указывая метод вручную
	formData.append("_method", "PUT");

	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.post(`/products/${id}`, formData);
	});
}

export function getProduct(id: number) {
	return axiosClient.get(`/products/${id}`);
}

export function getProductComments(id: number, limit: number) {
	return axiosClient.get(`/product/comments/${id}?limit=${limit}`);
}

export function deleteProduct(id: number) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.delete(`/products/${id}`);
	});
}

export function deleteProductImage(id: number) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.delete(`/products/image/${id}`);
	});
}
