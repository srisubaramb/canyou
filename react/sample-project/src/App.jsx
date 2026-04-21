import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import UseEffect from "./UseEffect/UseEffect.jsx";
function App() {
	return (
		<>
			<BrowserRouter>
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
			<UseEffect/>
		</>
	)
}
export default App;