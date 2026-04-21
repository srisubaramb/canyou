import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import Nav from "./Nav";
import Products from './Products';
import { useState } from 'react';
let darkTheme = false;
function App() {
	return (
		<>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Hero/>}/>
				<Route path='/products' element={<Products/>}/>
			</Routes>
			<ThemeToggleButton />
		</BrowserRouter>	
		</>
	)
}
function ThemeToggleButton() {
	const [icon , setIcon] = useState('🌚')
	const location = useLocation();
	function changeTheme() {
		darkTheme = !darkTheme
		document.querySelector('body').classList.toggle('dark-theme-bg')
		document.querySelector('a').classList.toggle('dark-theme-text')
		document.querySelectorAll('li a').forEach(element => element.classList.toggle('dark-theme-text'))
		if (location.pathname == '/products') {
			document.querySelectorAll('figure').forEach(element => {
				element.classList.toggle('dark-theme-text')
				element.classList.toggle('dark-theme-border')
			}
		)
			document.querySelectorAll('button').forEach(element => element.classList.toggle('dark-theme-btn'))
		}
		 setIcon ( darkTheme ? '🌝' :'🌚')
	}
	return (
		<button className='btn fs-1 position-absolute border-0 bottom-0 end-0' title='Dark Mode' onClick={changeTheme}>{icon}</button>
	)
}
export default App;