import axios from "axios";

const axiosClient = axios.create({
	baseURL: `http://comfort.loc/api`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		console.log(error);
	}
);

export default axiosClient;
