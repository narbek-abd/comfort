import { UserActionTypes } from "../../types/User";

export function setUser(data: any) {
	return {
		type: UserActionTypes.SET_USER,
		payload: data,
	};
}

export function deleteUser() {
	return {
		type: UserActionTypes.DELETE_USER,
	};
}
