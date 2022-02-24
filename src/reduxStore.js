import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from "./tweetSlice";

export const signInUserAction = "signIn";

const userSignInReducer = (state=null, action) => {
	if (action.type === signInUserAction) {
		return action.data;
	}
	return state;
};

export const signInActionCreator = (data) => {
	return {
		type: signInUserAction,
		data: data,
	};
};
const store = configureStore({
	preloadedState: JSON.parse(window.localStorage.getItem('tweetState')) || {},

	reducer: {
		user: userSignInReducer,
		tweet: tweetReducer,
	},
});
const handleChange = () => {
	const newState = store.getState();
	window.localStorage.setItem("tweetState", JSON.stringify(newState));
}
store.subscribe(handleChange);

export default store;
