import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate, useParams} from 'react-router'
function Form() {
	const {id} = useParams()
	const [userObj, setUserObj] = useState({})
	const navigate = useNavigate()
	useEffect(() => {
		(async () => {
			if(id) {
				const {data:[user]} = await axios.get(`http://localhost:3000/get-user/${id}`)
				console.log(user)
				setUserObj(user)
		}
		})()
 	} , [])
	async function addUser(e) {
		e.preventDefault()
		try{
			await axios.post('http://localhost:3000/add-user', userObj)
			e.target.reset()
			navigate('/')
		} catch(exception){
			console.log(exception)
		}
	}
	async function editUser(e) {
		e.preventDefault()
		try{
			await axios.put(`http://localhost:3000/edit-user/${id}`, userObj)
			e.target.reset()
			navigate('/')
		} catch(exception){
			console.log(exception)
		}
	}
	return (
			<form onSubmit={(e) => id ? editUser(e) : addUser(e)}>
				<input type="text" placeholder="Name" onChange={(e) => setUserObj({...userObj , name: e.target.value})} defaultValue={userObj?.name}/>
				<input type="number" name="age" id="age" placeholder="Age" onChange={(e) => setUserObj({...userObj , age: e.target.value})} defaultValue={userObj?.age}/>
				<input type="text" name="native" id="native" onChange={(e) => setUserObj({...userObj , native: e.target.value})} defaultValue={userObj?.native}/>
				<input type="submit" value="Add user" />
			</form>
	)
}
export default Form;
