import { Link } from "react-router-dom";
import Nav from "./Nav";
function Home(){
	return (
		<>
			<Nav />
			<main className="main-app">
		<section className="hero-section">
			<div className="hero-section-top">
				<h2 className="hero-section-heading">
					Maximize Your Day with <span className="hero-section-span">Wello Tracker</span>
				</h2>
				<div className="hero-section-buttons">
					<Link to='/signup' className="btn btn-nobg btn-outline btn-create-account">Create Free account</Link>
				</div>
			</div>
		</section>
	</main>
		</>
	)
}
export default Home;