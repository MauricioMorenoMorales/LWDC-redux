import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../store/selectors/PostSelectors';

const SinglePost = props => {
	return (
		<div>
			<div>Single Post Page</div>
			<div>ID: {props.post.id}</div>
			<div>ID: {props.post.title}</div>
		</div>
	);
};

// 76 cuando tengas que usar los props para generar tu estado usa esto
const makeStateToProps = () => {
	debugger;
	const getPostDetails = getPost;
	return (state, props) => {
		return {
			post: getPostDetails(state, props),
		};
	};
};

// 76 también se puede hacer de esta manera pero solo si se ejecuta un componente a la vez
// const mapStateToProps = (state, props) => {
// 	return {
// 		post: getPost(state, props),
// 	};
// };

export default connect(makeStateToProps)(SinglePost);
