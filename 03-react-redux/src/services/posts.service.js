import axios from 'axios';

export const getPosts = () =>
	axios.get(
		'https://react-course-b798e-default-rtdb.firebaseio.com/posts.json',
	);

export const createPost = postData =>
	axios.post(
		'https://react-course-b798e-default-rtdb.firebaseio.com/posts.json',
		postData,
	);
