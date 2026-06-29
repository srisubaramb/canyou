import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router"

function UserList() {
	async function deleteUser(id){
		await axios.delete(`http://localhost:3000/delete-user/${id}`)
		setRefresh(true)
	}
	const [users, setUsers] = useState([])
	const [refresh,setRefresh] = useState(false)
	useEffect(() => {
	 ( async function () {
		try {
			const {data:userList} = await axios.get('http://localhost:3000/list-users')
			console.log(userList)
			setUsers(userList)
			setRefresh(false)
		} catch(err) {
			console.log("Can't get the user " + err)
		}
	 }
	 )()
	}, [refresh])
	return (
		<>
		<div className="grid grid-cols-2 gap-2 m-2">
			{users.length > 0 && users.map(user => <div key={user._id} className="bg-gray-400 rounded-3xl p-2">
				<h3 className="text-2xl">{user.name}</h3>
				<h4>{user.age}</h4>
				<h5>{user.native}</h5>
				<div className="flex gap-2">
					<Link to={`/edit-user/${user._id}`} className="bg-green-500 rounded-lg p-2 py-1 text-white">Edit</Link>
					<button onClick={() => deleteUser(user._id)} className="bg-red-500 rounded-lg p-2 py-1">Delete</button>
				</div>
			</div>)}
		</div>
		</>
	)
}
export default UserList	