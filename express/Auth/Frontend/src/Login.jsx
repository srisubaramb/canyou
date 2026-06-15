import { useState } from "react";
import api from "./Api";
import { useNavigate } from "react-router-dom";

function Login() {
	const [userData, setUserData] = useState({})
	const navigate = useNavigate()
	async function handleSubmit(e) {
		e.preventDefault()
		console.log("Login pressed")
		const {data:[userFound]} = await api.post('/login', {email : userData.email})
		console.log(userFound)
		if(userFound.password == userData.password) {
			navigate('/dashboard')
		} else {
			console.log('Invalid login credentials')
		}
	}
	return(
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<input type="email" name="email" id="email" placeholder="Email" onChange={(e) => {setUserData({...userData, email: e.target.value})}}/>
				<input type="password" name="password" id="password" placeholder="Password" onChange={(e) => {setUserData({...userData, password: e.target.value})}}/>
				<input type="submit" value="Login" />
			</form>
	)
}
export default Login;