import { useState } from "react";
import api from "./Api";
function Signup() {
	const [userData, setUserData] = useState({})
	async function handleFormSubmit(e){
		e.preventDefault()
		if(userData.password == userData.cpassword) {
			try {
				await api.post('/signup' , {name: userData.name, email: userData.email, password : userData.password})
			} catch(e) {
				console.log("Can't get the signup route"+ e)
			}
		}
		e.target.reset();
	}
	return (
		<form action="" onSubmit={(e) => handleFormSubmit(e)}>
			<input type="text" placeholder="Name" onChange={(e) => setUserData({...userData, name: e.target.value})}/>
			<input type="email" placeholder="Email" onChange={(e) => setUserData({...userData, email: e.target.value})}/>
			<input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setUserData({...userData, password: e.target.value})}/>
			<input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={(e) => setUserData({...userData, cpassword: e.target.value})}/>
			<input type="submit" value="Sign Up" />
		</form>
	)
}
export default Signup