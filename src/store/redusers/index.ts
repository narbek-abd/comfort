import {combineReducers} from "redux";
import {CartReduser} from "./CartReduser";
import {UserReduser} from "./UserReduser";

export const rootReducer = combineReducers({
    cart: CartReduser,
    user: UserReduser,
})

export type RootState = ReturnType<typeof rootReducer>
