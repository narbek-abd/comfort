import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../redusers";
import { UserActionTypes } from "types/UserReduxTypes";
import { UserTypes } from "types/UserTypes";
import api from "api";
import { LoginFormTypes, RegisterFormTypes } from "types/FormTypes";
import Cookies from "js-cookie";

export const register =
	(
		registerData: RegisterFormTypes
	): ThunkAction<void, RootState, unknown, AnyAction> =>
	async (dispatch) => {
		try {
			let response = await api.users.registerUser(registerData);

			dispatch(setUser(response.data));

			return Promise.resolve();
		} catch (e: any) {
			return Promise.reject();
		}
	};

export const login =
	(
		loginData: LoginFormTypes
	): ThunkAction<void, RootState, unknown, AnyAction> =>
	async (dispatch) => {
		try {
			let response = await api.users.loginUser(loginData);

			dispatch(setUser(response.data));

			return Promise.resolve();
		} catch (e: any) {
			return Promise.reject();
		}
	};

export const setUser =
	(
		userData: LoginFormTypes
	): ThunkAction<void, RootState, unknown, AnyAction> =>
	(dispatch) => {
		dispatch({
			type: UserActionTypes.SET_USER,
			payload: userData.user,
		});

		Cookies.set("auth-token", userData.token, {
			expires: 7,
			sameSite: "Lax",
		});
	};

export const deleteUser =
	(): ThunkAction<void, RootState, unknown, AnyAction> =>
	async (dispatch) => {
		try {
			await api.users.logoutUser();

			Cookies.remove("auth-token");

			dispatch({
				type: UserActionTypes.DELETE_USER,
			});

			return Promise.resolve();
		} catch (e: any) {
			return Promise.reject();
		}
	};
