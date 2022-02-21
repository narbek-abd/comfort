import {combineReducers} from "redux";
import {CartReduser} from "./CartReduser";

export const rootReducer = combineReducers({
    cart: CartReduser,
})

export type RootState = ReturnType<typeof rootReducer>
