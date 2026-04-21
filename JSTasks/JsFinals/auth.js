const formStatus = document.querySelector('.form-validation-msg')
const existingUser = JSON.parse(localStorage.getItem('users')) || []
const signup = document.querySelector('#user-signup-form')
const login = document.querySelector('#user-login-form')
if(signup) {
	signup.addEventListener('submit', (e) => {
		e.preventDefault()
		const username = e.target.elements.username.value
		const email = e.target.elements.email.value
		const password = e.target.elements.password.value
		const confirmPassword = e.target.elements.confirmPassword.value
		if(password !== confirmPassword)	{
			showFormValidationMsg("Password should match confirm password")
			e.target.reset()
			return;
		}
		if(existingUser.find(user => user.email === email)) {
			showFormValidationMsg("Email Already exist")
			e.target.reset()
			return
		}
		existingUser.push({username,email,password})
		localStorage.setItem('users',JSON.stringify(existingUser))
		location.href = './login.html'
		e.target.reset()
	})
}
if(login){
	login.addEventListener('submit' , (e) => {
		e.preventDefault()
		sessionStorage.clear()
		const email = document.querySelector('#email').value
		const password = document.querySelector('#password').value
		const [user]= existingUser.filter(user => user.email === email)
		if(user) {
			if(user.password == password){
				sessionStorage.setItem('user', JSON.stringify(user))
				location.href = './board.html'
			} else {
				showFormValidationMsg('Password Incorrect')
			}
		} else {
			showFormValidationMsg('Email not found!')
		}
	})
}
function showFormValidationMsg(msg) {
	formStatus.textContent = msg
	formStatus.classList.toggle('form-validation-msg-show')
	const id = setTimeout(() => {
		formStatus.classList.toggle('form-validation-msg-show')
	} , 2000)
}
