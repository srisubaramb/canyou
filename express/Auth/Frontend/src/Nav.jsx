import {Link} from 'react-router-dom'
function Nav() {
	return(
		<>
			<ul>
				<li><Link to='/signup'>Sign up</Link></li>
				<li><Link to={'/login'}>Login</Link></li>
			</ul>
		</>
	)
}
export default Nav;