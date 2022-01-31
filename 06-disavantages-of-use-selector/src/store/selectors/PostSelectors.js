import { createSelector } from 'reselect';

export const getPost = state => state.posts;
export const getFilter = state => state.filter;

export const getActivePost = createSelector(
	[getPost, getFilter],
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
