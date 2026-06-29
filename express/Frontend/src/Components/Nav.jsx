import { Link } from "react-router"
function Nav() {
	return(
		<>
			<ul className="flex bg-amber-500 gap-2 p-2">
				<li><Link to='/'>User List</Link></li>
				<li><Link to='add-user'>Add User</Link></li>
			</ul>
		</>
	)
}
export default Nav