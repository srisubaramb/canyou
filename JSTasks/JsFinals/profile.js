const logout = document.querySelector('button')
const currentUser = JSON.parse(sessionStorage.getItem('user')) 
const boardString = `kanbon_${currentUser.email}`
const userBoard = JSON.parse(localStorage.getItem(boardString))

//extract data
function extract_data() {
	const username = currentUser.username
	const email = currentUser.email
	const todoTaskCount = userBoard.filter(user => user.taskStatus == 'to-do').length
	const inProgressTaskCount = userBoard.filter(user => user.taskStatus == 'in-progress').length
	const completedTaskCount = userBoard.filter(user => user.taskStatus == 'completed').length
	return {username, email, todoTaskCount, inProgressTaskCount, completedTaskCount}
}
function renderDataInPage({username, email, todoTaskCount, inProgressTaskCount, completedTaskCount}){
	document.querySelector('.username').textContent = `${username}`
	document.querySelector('.email').textContent = `${email}`
	document.querySelector('.total-task').textContent = `Total task ${todoTaskCount + inProgressTaskCount + completedTaskCount}`
	document.querySelector('.todo').textContent = `ToDo task ${todoTaskCount}`
	document.querySelector('.in-progress').textContent = `In Progress ${inProgressTaskCount}`
	document.querySelector('.completed').textContent = `Completed  ${completedTaskCount}`
}
renderDataInPage(extract_data())
logout.addEventListener('click', (e) => {
	if(confirm('Sure you want to logout')) {
		logoutUser()
	} 
})

function logoutUser() {
	sessionStorage.removeItem('user')
	location.href = './login.html'
	alert('logged out')
}