import { useContext } from "react";
import { userContext } from "./App";
import { showNotification, storeLocal } from "./utils";
import { Link } from "react-router-dom";
import './auth.css'
function SignUp() {
	const ctx = useContext(userContext)
	const emailRegex = /^[A-Za-z0-9._%]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
	const passwordRegex = /[A-Z0-9a-z]{8,}[^a-zA-Z0-9\s]{1,}/
	function handleSignup(e){
		e.preventDefault()
		const name = document.querySelector('#name').value
		const email = document.querySelector('#email').value
		const password = document.querySelector('#password').value
		const confirmPassword = document.querySelector('#confirm-password').value
		if(name == '') {
			showNotification('Name is empty')
			return;
		}
		else if(name.length < 2) {
			showNotification("atleast 3 character required")
			return
		}
		if(!emailRegex.test(email) ){
			showNotification('email is not vaild')
			return
		}
		if (!passwordRegex.test(password)){
			showNotification("Min 8 characters, 1 special symbol needed")
			return
		}
		else if(password !== confirmPassword) {
			showNotification("Password and confirm password must be equal")
			return
		}
		const userObj = {
			name,
			email,
			password
		}
		ctx.setUsers(users => {
			const updatedUsers = [...users, userObj]
			console.log("User added ", updatedUsers)
			storeLocal('users', updatedUsers)
			return updatedUsers;
		})
	}
	return(
		<main className="main">
		<div className="image-section">
			<img src="bg-image-1.png" alt="signup-page-image" />
			<div className="overlay-text">
				<h2>Create Your Vision</h2>
				<p>Workspace to craft and elevate your ideas</p>
			</div>
		</div>
		<div className="form-section">
			<p className="form-validation-msg"></p>
			<h2>Create An Account</h2>
		<form action="" onSubmit={(e) => handleSignup(e)}>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" placeholder="Enter Your Name" required />
			<label htmlFor="email">Email</label>
			<input type="email" name="email" id="email" placeholder="Enter Your Email"/>
			<label htmlFor="password">Password</label>
			<input type="password" name="password" id="password" placeholder="Enter strong password"/>
			<label htmlFor="confirm-password">Confirm Password</label>
			<input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" />
			<input type="submit" value="Register" />
		</form>
		<p>Already have an account? <Link to='/login'>Login</Link></p>
		</div>
		</main>
	)
} 
export default SignUp;