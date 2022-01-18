//initialize state
const initialState = { counter: 1 };

//create action creators
const increment = () => {
	return {
		type: 'increment',
	};
};
const decrement = () => {
	return {
		type: 'decrement',
	};
};

//reducer
function counterReducer(state = initialState, action) {
	if (action.type === 'increment') {
		return {
			...state,
			counter: state.counter + 1,
		};
	}
	if (action.type === 'decrement') {
		return {
			...state,
			counter: state.counter - 1,
		};
	}
	return state;
}

// merge the two enhancers
const enhancers = Redux.compose(newDispatch, newState);

//create store
const store = Redux.createStore(counterReducer, { counter: 0 }, enhancers);

function render() {
	const state = store.getState();
	console.log(state);
	document.getElementById('counter').innerHTML = state.counter;
}
render();

store.subscribe(() => {
	render();
});

document.getElementById('increment').addEventListener('click', event => {
	store.dispatch(increment());
	render();
});
document.getElementById('decrement').addEventListener('click', event => {
	store.dispatch(decrement());
	render();
});

// añade funciones a los stores
function newDispatch(createStore) {
	return function (reducer, preloadedState, enhancers) {
		let store = createStore(reducer, preloadedState, enhancers);
		function newDispatch(action) {
			const result = store.dispatch(action);
			console.log('Hello world, Perform Logging');
			return result;
		}
		return { ...store, dispatch: newDispatch };
	};
}

function newState(createStore) {
	return function (reducer, preloadedState, enhancers) {
		let store = createStore(reducer, preloadedState, enhancers);
		function newState() {
			return {
				...store.getState(),
				hai: 'Hello world',
			};
		}
		return { ...store, getState: newState };
	};
}
