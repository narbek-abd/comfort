import axiosClient, { webAxiosClient } from "./axiosClient";
import { OrderFormTypes } from "../types/FormTypes";

export function createOrder(data: OrderFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.post("/orders", data);
	});
}

export function deleteOrder(id: number) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.delete(`/orders/${id}`);
	});
}
