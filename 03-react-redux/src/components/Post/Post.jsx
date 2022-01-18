import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPostAction } from '../../store/actions/Post.actions';

class Posts extends Component {
	onCreatePost() {
		this.props.createPostAction();
	}
	render() {
		const posts = [];
		for (const post of this.props.posts) {
			posts.push(
				<div key={post.id}>
					<h5>{post.title}</h5>
					<p>{post.description}</p>
				</div>,
			);
		}
		return (
			<div>
				<h2>Posts</h2>
				<hr />
				<button onClick={this.onCreatePost.bind(this)}>Create Post</button>
				<div>{posts}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	};
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		createPost: () => dispatch(createPostAction()),
// 	};
// };
const mapDispatchToProps = dispatch =>
	bindActionCreators({ createPostAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
