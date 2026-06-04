import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import UseEffect from "./UseEffect/UseEffect.jsx";
import UseReduce from "./UseReduce/UseReduce.jsx";
function App() {
	return (
		<>
			<BrowserRouter>
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/use-reduce'>Use Reduce</Link></li>
				</ul>
			</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/use-reduce" element={<UseReduce />} />
				</Routes>
			</BrowserRouter>
			<UseEffect/>
		</>
	)
}
export default App;