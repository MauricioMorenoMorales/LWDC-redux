import { applyMiddleware, compose, createStore } from 'redux';
import PostsReducer from '../reducers/PostsReducer';

const loggerMiddleware = store => next => action => {
	console.log(`Dispatching the action ${action}`);
	console.log(`New state ${store.getState()}`);
	const result = next(action);
	setTimeout(() => {
		console.log('dispatch time out');
	}, 5000);
	return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = applyMiddleware(loggerMiddleware);

export const store = createStore(PostsReducer, composeEnhancers(middleWare));

// ! this can be written in this way
// function exampleMiddleware(store) {
// 	return function (next) {
// 		return function (action) {
// 			return next(action);
// 		};
// 	};
// }
