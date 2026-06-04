import {Link} from 'react-router-dom'
function Nav() {
	return (	
	<header>
		<h2 className="company-logo"><Link to=".">AsfaroFoots</Link></h2>
		<nav>
			<ul>
				<li><Link to=".">Home</Link></li>
				<li><Link to="/orders">Orders</Link></li>
			</ul>
		</nav>
	</header>
	)
}
export default Nav;