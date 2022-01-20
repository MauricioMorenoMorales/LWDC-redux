export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const GET_POSTS = '[Post Action] Get Posts';
export const CONFIRMED_GET_POSTS = '[Post Action] Confirmed Get Posts';

export function createPostAction() {
	return {
		type: CREATE_POST_ACTION,
	};
}

// 69 Get the posts from the database
export function getPostsAction() {
	return {
		type: GET_POSTS,
	};
}

export function confirmedGetPostsAction(posts) {
	return {
		type: CONFIRMED_GET_POSTS,
		payload: posts,
	};
}
