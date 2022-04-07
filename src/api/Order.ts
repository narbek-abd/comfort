import axiosClient, { webAxiosClient } from "./axiosClient";
import axios from "axios";
import { OrderFormTypes } from '../types/FormTypes';

export function createOrder(data: OrderFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return axiosClient.post("/orders", data);
	});
}

