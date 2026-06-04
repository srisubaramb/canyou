import Home from "./Home";
import './App.css'
import Nav from "./Nav";
import Cart from "./Cart";
import {BrowserRouter , Routes, Route} from 'react-router-dom'
function App() {
	return(
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/orders" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App;