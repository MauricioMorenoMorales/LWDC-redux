import { createPost, getPosts } from '../../services/posts.service';

export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const GET_POSTS = '[Post Action] Get Posts';
export const CONFIRMED_GET_POSTS = '[Post Action] Confirmed Get Posts';

//? you can write this better
// export function createPostAction(postData) {
// 	return dispatch => {
// 		createPost(postData)
// 			.then(response => console.log(response.data))
// 			.catch(error =>
// 				console.log(
// 					`Error creating the new post but the action works ${error}`,
// 				),
// 			);
// 	};
// }

// create the post in the CreatePost.jsx
export const createPostAction = (postData, history) => dispatch =>
	createPost(postData)
		.then(response => {
			console.log(response);
			// here you can change the app url
		})
		.catch(error =>
			console.log(`Error creating the new post but the action works ${error}`),
		);

// 69 Get the posts from the database
// Cuándo uses thunk puedes agregar funciones dentro de las acciones y ejecutar otros dispatchs dentro de la accion
export function getPostsAction() {
	return dispatch => {
		// Ajax call
		getPosts()
			.then(response => {
				console.log(response.data);
				let posts = [];
				for (const key in response.data) {
					posts.push({ ...response.data[key], id: key });
				}
				dispatch(confirmedGetPostsAction(posts));
			})
			.catch(error => console.log(`Exercuting getPostsAction ${error}`));
	};
}

// 69 add the data to the state
export function confirmedGetPostsAction(posts) {
	return {
		type: CONFIRMED_GET_POSTS,
		payload: posts,
	};
}
