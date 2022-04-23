import {UserTypes} from "../types/UserTypes";

export interface UserState {
    data: UserTypes;
}

export enum UserActionTypes {
    SET_USER = "SET_USER",
    DELETE_USER = "DELETE_USER",
}

interface setUserAction {
    type: UserActionTypes.SET_USER;
    payload: UserTypes;
}

interface deleteUserAction {
    type: UserActionTypes.DELETE_USER;
}

export type UserAction = setUserAction | deleteUserAction;