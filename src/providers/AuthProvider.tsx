import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redusers";
import { setUser } from "../store/action-creators/User";
import Cookies from "js-cookie";
import api from '../api';

export default function AuthProvider() {
	const dispatch = useDispatch();

	let user = useSelector((state: RootState) => state.user.data);

	let token = Cookies.get("auth-token");

	if (token && user === null) {
		api.users.getCurrentUser().then((response) => dispatch(setUser(response.data)));
	}
}
