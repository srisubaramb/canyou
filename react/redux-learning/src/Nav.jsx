import {Link} from 'react-router-dom'
function Nav() {
	return (
		<>
			<nav>
				<ul className='nav-links'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to="adduser">Add Users</Link></li>
				</ul>
			</nav>
		</>
	)
}
export default Nav;