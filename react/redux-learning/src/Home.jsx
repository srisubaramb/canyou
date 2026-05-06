import {useDispatch, useSelector } from 'react-redux'
import Form from './Form'
import { useNavigate } from 'react-router-dom'
import { deleteUsers } from './userSlices'
function Home(){
	const users = useSelector(store => store.userInfo.users)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	return (
		<>
			<ul>
		  		{users.length > 0 && users.map((user, index) => {
					return <li key={index} className='user'>
						<p>Name: {user.name} </p> 
						<p>Age: {user.age} </p> 
						<p>Job: {user.job} </p>
						<button onClick={() => {navigate('updateuser', {state : {userId : user.id}})}}>Edit</button>
						<button onClick={() => {dispatch(deleteUsers({id : user.id}))}}>Delete</button>
					</li>
		  		})}
		  </ul>
		</>
	)
}
export default Home;