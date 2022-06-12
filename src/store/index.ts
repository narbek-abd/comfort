import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redusers";
import thunkMiddleware from "redux-thunk";

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunkMiddleware),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ ?
			(window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: number) => f
	)
);
