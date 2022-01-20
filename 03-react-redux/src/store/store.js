import { applyMiddleware, compose, createStore } from 'redux';
import axios from 'axios';
import PostsReducer from '../reducers/PostsReducer';
import { confirmedGetPostsAction, GET_POSTS } from './actions/Post.actions';

const loggerMiddleware = store => next => action => {
	console.log(`Dispatching the action ${action.type}`);
	console.log(`New state ${store.getState()}`);
	const result = next(action);
	setTimeout(() => {
		console.log('dispatch time out');
	}, 5000);
	return result;
};

// 69 gets the data from this place
const fetchDataMiddleware = store => next => action => {
	if (action.type === GET_POSTS) {
		// Ajax call
		axios
			.get(`https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`)
			.then(response => {
				console.log(response.data);
				let posts = [];
				for (const key in response.data) {
					posts.push({ ...response.data[key], id: key });
				}
				store.dispatch(confirmedGetPostsAction(posts));
			})
			.catch(error => console.log(error));
	}
	return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = applyMiddleware(loggerMiddleware, fetchDataMiddleware);

export const store = createStore(PostsReducer, composeEnhancers(middleWare));

// ! this can be written in this way
// function exampleMiddleware(store) {
// 	return function (next) {
// 		return function (action) {
// 			return next(action);
// 		};
// 	};
// }
