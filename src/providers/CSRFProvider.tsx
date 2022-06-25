import { webAxiosClient } from "api/axiosClient";

export default function CSRFProvider() {
	webAxiosClient.get("/sanctum/csrf-cookie");
}
