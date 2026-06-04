import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from './Dashboard'
import './App.css'
import { useState } from "react";
import { createContext } from "react";
import {  getLocal } from "./utils";
import {BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
export const userContext = createContext()
function App() {
	const [users, setUsers] = useState(getLocal('users') || [])
	const [isAuth, setIsAuth] = useState(false)
	return(
		<>
		<BrowserRouter>
			<userContext.Provider value={{users, setUsers, isAuth, setIsAuth}}>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/signup" element={<SignUp />}/>
					<Route path="/login" element={<Login/>} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/dashboard" element={isAuth ? <Dashboard/>: <Navigate to= "/login" /> } />
				</Routes>
				
			</userContext.Provider>
		</BrowserRouter>
		</>
	)
}
export default App;
