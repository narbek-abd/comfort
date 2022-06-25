import axiosClient from "./axiosClient";
import { CategoryFormTypes } from "types/FormTypes";
import { slugTransliterate } from "utils/slugTransliterate";

const Categories = {
	getCategories: (params = '') => axiosClient.get(`/categories/list${params}`),
	getCategoriesCount: () => axiosClient.get(`/categories/count`),
	getCategoriesWithChildren: () => axiosClient.get("/categories"),
	getCategory: (id: number) => axiosClient.get(`/categories/${id}`),
	getCategoryBySlug: (slug: string) =>axiosClient.get(`/categories/list?slug=${slug}`),

	createCategory: (data: CategoryFormTypes) => {
		data.slug = slugTransliterate(data.name);
		return axiosClient.post("/categories", data);
	},

	updateCategory: (id: number, data: CategoryFormTypes) => {
		data.slug = slugTransliterate(data.name);
		return axiosClient.put(`/categories/${id}`, data);
	},

	deleteCategory: (id: number) => axiosClient.delete(`/categories/${id}`),
};

export default Categories;
