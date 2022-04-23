import {combineReducers} from "redux";
import {CartReduser} from "./CartReduser";
import {WishlistReduser} from "./WishlistReduser";
import {UserReduser} from "./UserReduser";

export const rootReducer = combineReducers({
    cart: CartReduser,
    wishlist: WishlistReduser,
    user: UserReduser,
})

export type RootState = ReturnType<typeof rootReducer>
