import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
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
	}
	return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 70 Con thunk agregas la posibilidad de ejecutar funciones dentro de las acciones, aunque tambien puedes usar
// el retorno de objetos tradicionalmente usado
const middleWare = applyMiddleware(thunk);

export const store = createStore(PostsReducer, composeEnhancers(middleWare));

// ! this can be written in this way
// function exampleMiddleware(store) {
// 	return function (next) {
// 		return function (action) {
// 			return next(action);
// 		};
// 	};
// }
