//
// action types
//

export const SET_POSTS = "SET_POSTS";

//
// action creators
//

export function setPosts(posts) {
	return { type: SET_POSTS, posts };
}
