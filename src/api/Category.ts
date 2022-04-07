import axiosClient, { webAxiosClient } from "./axiosClient";
import { CategoryFormTypes } from "../types/CategoryTypes";

export function getCategories() {
	return axiosClient.get("/categories/list");
}

export function getCategoriesWithChildren() {
	return axiosClient.get("/categories");
}

export function getCategory(id: number) {
	return axiosClient.get(`/categories/${id}`);
}

export function createCategory(data: CategoryFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.post("/categories", {
			name: data.name,
			parent_id: data.parent_id,
		});
	});
}

export function updateCategory(id: number, data: CategoryFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.put(`/categories/${id}`, {
			name: data.name,
			parent_id: data.parent_id,
		});
	});
}

export function deleteCategory(id: number) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.delete(`/categories/${id}`);
	});
}
