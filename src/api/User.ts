import axiosClient, { webAxiosClient } from "./axiosClient";
import RegisterFormTypes from "../types/RegisterFormTypes";
import LoginFormTypes from "../types/LoginFormTypes";

export function getCurrentUser() {
	return axiosClient.get("/user/me");
}

export function registerUser(data: RegisterFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return webAxiosClient.post("/register", data);
	});
}

export function loginUser(data: LoginFormTypes) {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return webAxiosClient.post("/login", data);
	});
}

export function logoutUser() {
	return webAxiosClient.get("/sanctum/csrf-cookie").then(() => {
		return webAxiosClient.post("logout");
	});
}
