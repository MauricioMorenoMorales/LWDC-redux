import {
	CONFIRMED_CREATE_POST_ACTION,
	CONFIRMED_GET_POSTS,
	CREATE_POST_ACTION,
} from '../store/actions/Post.actions';

const initialState = {
	posts: [
		{ id: 1, title: 'New Title', description: 'Sample description' },
		{ id: 2, title: 'second Title', description: 'Sample description' },
		{ id: 3, title: 'Third Title', description: 'Sample description' },
		{ id: 4, title: 'Fourth Title', description: 'Sample description' },
	],
};

export default function PostsReducer(state = initialState, actions) {
	if (actions.type === CREATE_POST_ACTION) {
		const post = {
			id: Math.random(),
			title: `${Math.random()} post`,
			description: 'Sample description',
		};
		const posts = [...state.posts];
		posts.push(post);
		return {
			...state,
			posts,
		};
	}
	// 69 Gets the info to the database
	if (actions.type === CONFIRMED_GET_POSTS) {
		return {
			...state,
			posts: actions.payload,
		};
	}
	// 73 agrega las peticiones al store
	if (actions.type === CONFIRMED_CREATE_POST_ACTION) {
		const posts = [...state.posts];
		posts.push(actions.payload);
		return {
			...state,
			posts,
		};
	}
	return state;
}
