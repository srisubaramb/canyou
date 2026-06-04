import { Link } from "react-router-dom";
function Nav() {
	return (
		<>
			<header className="header mt-2">
				<h2 className="header-logo">W<span className="header-e">e</span>ll<span className="header-o">o</span></h2>
				<nav className="header-nav">
					<ul className="nav-ul">
						<li className="nav-li"><Link to=".">Home</Link></li>
						<li className="nav-li"><Link to=".">About Us</Link></li>
						<li className="nav-li"><Link to="./contact">Contact</Link></li> 	
					</ul>
				</nav>
				<div className="header-buttons">
					<Link to="login" className="btn btn-nobg btn-login">Login</Link>
					<Link to="signup" className="btn btn-signup">Sign Up</Link>
				</div>
			</header>
		</>
	)
}
export default Nav;