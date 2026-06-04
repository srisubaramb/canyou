import { useContext } from "react";
import { userContext } from "./App";
import { useNavigate } from "react-router-dom";
import { setCurrentUser , showNotification } from "./utils";

function Login(){
	const emailRegex = /^[A-Za-z0-9._%]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
	const ctx = useContext(userContext)
	const navigate = useNavigate()
	function handleLogin(e){
		e.preventDefault()
		const email = document.getElementById('email').value
		const password = document.getElementById('password').value
		const userFound = ctx.users.find(user => user.email == email && user.password == password)
		if(!emailRegex.test(email) ){
			showNotification('email is not vaild')
			return
		}
		if(!userFound) {
			showNotification("User credentials not found")
			return
		}
		if(userFound) {
			console.log("Login Successful")
			ctx.setIsAuth(true)
			setCurrentUser(userFound)
			navigate('/dashboard')
		}
		else{
			ctx.setIsAuth(true)
			console.log('credentials invalid')
		}
		e.target.reset()
	}
	return (
		<main className="main">
		<div className="image-section">
			<img src="bg-image-1.png" alt="signup-page-image" />
			<div className="overlay-text">
				<h2>Regain Your Tracking</h2>
				<p>Your Health needs to be Monitered</p>
			</div>
		</div>
		<div className="form-section">
			<p className="form-validation-msg">ooko</p>
			<h2>Login</h2>
			<form action="" onSubmit={(e) => handleLogin(e)}>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" placeholder="Enter Your Email" required/>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" placeholder="Enter strong password" required/>
				<input type="submit" value="Login" />
			</form>
		</div>
		</main>
	)
}
export default Login;