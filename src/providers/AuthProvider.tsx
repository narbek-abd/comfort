import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redusers";
import { setUser } from "../store/action-creators/User";
import { getCurrentUser } from "../api/User";
import Cookies from "js-cookie";
import axiosClient from "../api/axiosClient";

interface AuthProviderProps {
	children?: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
	const dispatch = useDispatch();
	let user = useSelector((state: RootState) => state.user.data);

	let token = Cookies.get("auth-token");

	if (token && user === null) {
		getCurrentUser().then((response) => dispatch(setUser(response.data)));
	}

	return <>{children}</>;
}
