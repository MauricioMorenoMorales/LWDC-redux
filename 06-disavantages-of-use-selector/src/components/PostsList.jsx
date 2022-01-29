import { connect } from 'react-redux';
import { incrementCount } from '../store/actions/PostsActions';

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

// Filtra los tipos de posts
const getActivePosts = (posts, filter) => {
	switch (filter) {
		case 'SHOW_ACTIVE':
			return posts.filter(post => post.isActive);
		case 'SHOW_INACTIVE':
			return posts.filter(post => !post.isActive);
		default:
			return posts;
	}
};

//! de esta forma cuando cambias el estado count tambien el estado posts se renderizara
const mapStateToProps = state => {
	return {
		posts: getActivePosts(state.posts, state.filter),
		count: state.count,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch(incrementCount()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
