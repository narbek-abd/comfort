import axiosClient from "./axiosClient";
import axios from "axios";


export function getProducts() {
			return axiosClient.get("/products/list");
}


export function createProduct(formData: any) {
	return axiosClient.post("/products", formData);
}

export function updateProduct(id: number, formData: any) {
    // Laravel не принимает formData в axios.put методе, так что отправляем как post, указывая метод вручную 
    formData.append("_method", 'PUT');
	return axiosClient.post(`/products/${id}`, formData);
}

export function getProduct(id: number) {
	return axiosClient.get(`/products/${id}`);
}

export function deleteProduct(id: number) {
	return axiosClient.delete(`/products/${id}`);
}

export function deleteProductImage(id: number) {
	return axiosClient.delete(`/products/image/${id}`);
}
