import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./container/Posts/reducer";

export default function configureStore(preloadState) {
	const middlewares = [thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const enhancer = [middlewareEnhancer];
	const composedEnhancers = compose(...enhancer);
	const store = createStore(rootReducer, preloadState, composedEnhancers);
	return store;
}
