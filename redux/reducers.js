import { SET_POSTS } from "./actions";
import { combineReducers } from "redux";

//
// set initial state
//

const initialState = {
	posts: []
};

//
// reducers
//

function posts(state = [], action) {
	switch (action.type) {
		case SET_POSTS:
			return [...action.posts];
		default:
			return state;
	}
}

const app = combineReducers({ posts });

export default app;
