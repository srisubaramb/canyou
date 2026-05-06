import { useLocation, useNavigate } from "react-router-dom"
import { addUsers, updateUsers } from "./userSlices"
import { useDispatch, useSelector } from "react-redux"
function Form() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const userId = location.state?.userId
	console.log(userId)
	const userToUpdate = useSelector(store => store.userInfo.users).find(user => user.id == userId)
	console.log(userToUpdate)
	let buttonText = location.pathname == '/adduser' ? 'Add User' : 'Update User'
	function handleFormSubmit (e) {
		e.preventDefault()
		const name  = e.target.elements.name.value
		const age = e.target.elements.age.value
		const job = e.target.elements.job.value
		if(location.pathname == '/adduser') {
			const userObj = {id : Date.now(), name, age, job}
			dispatch(addUsers(userObj))
		} else if(location.pathname == '/updateuser') {
			dispatch(updateUsers({id : userId , userDetails : {name, age, job}}))
		}
		e.target.reset()
		navigate('/')

	}
	return (
		<div className="form-container">
			<form action="" onSubmit={(e) => handleFormSubmit(e)}>
				<input type="text" placeholder="Name" name="name" className="name" defaultValue={userToUpdate?.name}/>
				<input type="number" placeholder="Age" name="age" className="age" defaultValue={userToUpdate?.age}/>
				<input type="text" placeholder="Job" name="job" className="job" defaultValue={userToUpdate?.job}/>
				<input type="submit" value={buttonText}/>
			</form>
		</div>
	)
}
export default Form;