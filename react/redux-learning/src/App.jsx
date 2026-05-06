import Form from './Form'
import Home from './Home'
import Nav from './Nav'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
function App(){
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element = {<Home/>} />
					<Route path='/adduser' element = {<Form/>} />
					<Route path='/updateuser' element = {<Form/>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App;