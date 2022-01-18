const initialState = { counter: 0 };

export function CounterReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: state.counter + 1,
			};
		case 'decrement':
			return {
				...state,
				counter: state.counter - 1,
			};
		default:
			return state;
	}
}
