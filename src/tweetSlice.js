import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tweetList: [],
};

const tweetSlice = createSlice({
	name: "tweets",
	initialState,
	reducers: {
		saveTweet: (state, action) => {
			state.tweetList.push(action.payload);
    },
	},
});

export const { saveTweet } = tweetSlice.actions;

export const selectTweetList = state => state.tweet.tweetList;

export default tweetSlice.reducer;
