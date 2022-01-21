import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<hr />
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/posts" element={<Post />} />
						<Route path="/createpost" element={<CreatePost />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
