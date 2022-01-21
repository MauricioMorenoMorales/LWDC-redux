import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<div>
			<div>
				<h2>React Router</h2>
				<div>
					<div>
						<Link to="/">Home</Link>
						<Link to="/posts">Posts</Link>
						<Link to="/createpost">Create Post</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
