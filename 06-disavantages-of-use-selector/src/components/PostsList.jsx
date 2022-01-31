import { connect } from 'react-redux';
import { incrementCount } from '../store/actions/PostsActions';
import { getActivePost } from '../store/selectors/PostSelectors';

function PostsList(props) {
	return (
		<div style={{ marginLeft: '30px' }}>
			<h1>Posts List</h1>
			<button onClick={() => props.increment()}>Increment Count</button>
			<div>{props.count}</div>
			<div>
				{props.posts.map((post, index) => (
					<div key={index}>{post.title}</div>
				))}
			</div>
		</div>
	);
}

//! de esta forma cuando cambias el estado count tambien el estado posts se renderizara
const mapStateToProps = state => {
	return {
		// simplemente crea el selector en otro archivo y ponlo por cada estado
		posts: getActivePost(state),
		count: state.count,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch(incrementCount()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
