import axiosClient from "./axiosClient";

export function getCategories() {
	return axiosClient.get("/categories/list");
}

export function getCategory(id: number) {
	return axiosClient.get(`/categories/${id}`);
}
