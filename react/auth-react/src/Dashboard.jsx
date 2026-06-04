import { useContext } from "react"
import { userContext } from "./App"
import { getCurrentUser } from "./utils"
import './Dashboard.css'
function Dashboard() {
	const ctx = useContext(userContext)
	const user = getCurrentUser()
	return (
	 <div className="dashboard-container">
		<h1>Dashboard</h1>
		<p><span>Name:</span> {user.name}</p>
		<p><span>Email:</span> {user.email}</p>
		<p><span>Heart Rate:</span> 170 Bpm</p>
		<p><span>Weight:</span> 70 kg</p>
		<p><span>Height:</span> 5.1'</p>
   	 </div>
	)
}
export default Dashboard