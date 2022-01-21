import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPostAction } from '../../store/actions/Post.actions';

// 72 you can create all this component
const CreatePost = props => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const dispatch = useDispatch();

	const onCreatePost = event => {
		event.preventDefault();
		const postData = {
			title,
			description,
		};
		dispatch(createPostAction(postData));
	};

	return (
		<div>
			<h2>Create Post</h2>
			<div>
				<Link to="/posts">Back to posts</Link>
			</div>
			<div>
				<form onSubmit={onCreatePost}>
					<div>
						<label htmlFor="">Title</label>
						<div>
							<input
								type="text"
								name=""
								id=""
								value={title}
								onChange={event => setTitle(event.target.value)}
							/>
						</div>
					</div>
					<div>
						<label htmlFor="">Description</label>
						<div>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={description}
								onChange={event => setDescription(event.target.value)}
							></textarea>
						</div>
					</div>
					<div>
						<button type="submit">Create Post</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
