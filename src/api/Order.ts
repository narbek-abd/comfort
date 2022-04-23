import axiosClient, { webAxiosClient } from "./axiosClient";
import { OrderFormTypes } from "../types/FormTypes";

const Orders = {
	getOrders: (params = '') => axiosClient.get(`/orders${params}`),
	getOrdersCount: () => axiosClient.get(`/orders/count`),
	createOrder: (data: OrderFormTypes) => axiosClient.post("/orders", data),
	deleteOrder: (id: number) => axiosClient.delete(`/orders/${id}`),
};

export default Orders;
