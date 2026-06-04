import { useContext } from "react"
import { userContext } from "./App"

function storeLocal(key, value){
	localStorage.setItem(key, JSON.stringify(value))
}
function getLocal(key){
	return JSON.parse(localStorage.getItem(key))
}
function setCurrentUser(user){
	sessionStorage.setItem('user', JSON.stringify(user))
}
function getCurrentUser(){
	return JSON.parse(sessionStorage.getItem('user'))
}
function showNotification(notification, notificationDelay = 3000) {
		const notificationElement = document.querySelector('.form-validation-msg')
		console.log(notification)
		notificationElement.textContent = notification
		notificationElement.classList.toggle('form-validation-msg-show')
		setTimeout(() => {
			notificationElement.classList.toggle('form-validation-msg-show')
			notificationElement.textContent = ''
		} , notificationDelay)

}
export {storeLocal, getLocal, setCurrentUser, getCurrentUser, showNotification}