import axiosClient from "./axiosClient";

const Products = {
	getProducts: (params = '') => axiosClient.get(`/products/list${params}`),
	getProductsCount: () => axiosClient.get(`/products/count`),
	getProductsByIds: (ids: number[]) => axiosClient.get(`/products`, { params: { ids: ids } }),
	createProduct: (formData: any) => axiosClient.post("/products", formData),

	updateProduct: (id: number, formData: any) => {
		// we cant send images like formdata using the axios.PUT method, so we specify method manually and send using POST
		formData.append("_method", "PUT");
		return axiosClient.post(`/products/${id}`, formData);
	},

	getProduct: (id: number) => axiosClient.get(`/products/${id}`),
	getProductComments: (id: number, limit: number) => axiosClient.get(`/product/comments/${id}?limit=${limit}`),
	deleteProduct: (id: number) => axiosClient.delete(`/products/${id}`),
	deleteProductImage: (id: number) => axiosClient.delete(`/products/image/${id}`),
}

export default Products;