import { CREATE_POST_ACTION } from '../store/actions/Post.actions';

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
	return state;
}
