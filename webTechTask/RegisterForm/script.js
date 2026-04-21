const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')

document.querySelector('#register-form').addEventListener('submit', (e) => {
	e.preventDefault()
	if(userName.value === '') {
		console.log('Name is empty')
		userName.classList.add('border-danger')
		let status = document.createElement('p')
		status.textContent = "Name can't be empty"
		status.classList.add('text-danger')
		console.log(status)
		userName.parentElement.appendChild(status)
	}
})