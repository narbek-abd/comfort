export interface UserState {
    data: any;
}

export enum UserActionTypes {
    SET_USER = "SET_USER",
    DELETE_USER = "DELETE_USER",
}

interface setUserAction {
    type: UserActionTypes.SET_USER;
    payload: any;
}

interface deleteUserAction {
    type: UserActionTypes.DELETE_USER;
}

export type UserAction = setUserAction | deleteUserAction;
