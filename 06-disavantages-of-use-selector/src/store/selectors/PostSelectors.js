import { createSelector } from 'reselect';

export const getPosts = state => state.posts;
export const getFilter = state => state.filter;

export const getPostById = (state, props) =>
	state.posts.find(post => post.id === props.id);

// Si tienes multiples componentes que usen esta linea en una sola pagina tienes que crear una funcion anonima

export const getPost = createSelector([getPostById], post => post);

export const getActivePost = createSelector(
	[getPosts, getFilter],
	(posts, filter) => {
		switch (filter) {
			case 'SHOW_ACTIVE':
				return posts.filter(post => post.isActive);
			case 'SHOW_INACTIVE':
				return posts.filter(post => !post.isActive);
			default:
				return posts;
		}
	},
);
