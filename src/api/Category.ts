import axiosClient, { webAxiosClient } from "./axiosClient";
import { CategoryFormTypes } from "../types/CategoryTypes";
import { slugTransliterate } from "../utils/slugTransliterate";

export function getCategories() {
	return axiosClient.get("/categories/list");
}

export function getCategoriesWithChildren() {
	return axiosClient.get("/categories");
}

export function getCategory(id: number) {
	return axiosClient.get(`/categories/${id}`);
}

export function getCategoryBySlug(slug: string) {
	return axiosClient.get(`/categories/list?slug=${slug}`);
}

export function createCategory(data: CategoryFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.post("/categories", {
			name: data.name,
			slug: slugTransliterate(data.name),
			parent_id: data.parent_id,
		});
	});
}

export function updateCategory(id: number, data: CategoryFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.put(`/categories/${id}`, {
			name: data.name,
			slug: slugTransliterate(data.name),
			parent_id: data.parent_id,
		});
	});
}

export function deleteCategory(id: number) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.delete(`/categories/${id}`);
	});
}
