import { useEffect, useState } from 'react';
import { decrement, increment } from '../../store/actions/Counter.actions';
import { store } from '../../store/store';

export default function CounterFunction(props) {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		updateState();
		store.subscribe(updateState);
	}, []);
	function updateState() {
		const state = store.getState();
		setCounter(state.counter);
	}
	function onIncrement() {
		store.dispatch(increment());
	}
	function onDecrement() {
		store.dispatch(decrement());
	}
	return (
		<div>
			<div>counter Function Component</div>
			<div>{counter}</div>
			<div>
				<button onClick={onIncrement}>Increment</button>
				<button onClick={onDecrement}>Decrement</button>
			</div>
		</div>
	);
}
