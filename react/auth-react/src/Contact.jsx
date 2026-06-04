import { showNotification } from "./utils"

function Contact() {
	function handleSubmit(e) {
		e.preventDefault()
		showNotification('Thanks for contacting us!')
		e.target.reset()
	}

	return (
	<main className="main">
		<div className="image-section">
			<img src="bg-image-1.png" alt="signup-page-image" />
			<div className="overlay-text">
				<h2>Reach The Endless</h2>
				<p>Your Possibilty are not limited, elevate ideas</p>
			</div>
		</div>
		<div className="form-section">
			<p className="form-validation-msg"></p>
			<h2>Contact Us</h2>
			<form action="" id="user-login-form" onSubmit={(e) => {handleSubmit(e)}}>
				<input className="input-field" type="name" name="name" id="name" placeholder="Enter Your Name" required />
				<input className="input-field" type="email" name="email" id="email" placeholder="Enter Your Email" required/>
				<input className="input-field" type="text" placeholder="Enter your Message" id="message" name="message" required/>
				<input type="submit" value="Submit"/>
			</form>
			<p>Your doubt may got answer <a href="." className="auth-links">FAQ's</a></p>
		</div>
	</main>
	)
}
export default Contact;