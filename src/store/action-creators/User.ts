import { UserActionTypes } from "../../types/UserReduxTypes";
import { UserTypes } from "../../types/UserTypes";

export function setUser(data: UserTypes) {
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
