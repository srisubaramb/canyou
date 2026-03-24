const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age')
const birthdayElement = document.querySelector('#birthday')
const content = document.querySelector('.content')
document.querySelector('#userform').addEventListener('submit', (e) => {
	e.preventDefault()
	const userName  = nameElement.value;
	const age = Number(ageElement.value)
	const birthday = birthdayElement.value
	const p1 = new People(userName, age , birthday)
	const details = p1.getDetails()
	const voteText = p1.isEligibleForVote() ? `${userName} is eligible for vote` : `${userName} wait for ${18 - age} to get a vote ! `
	console.log(details)
	console.log(voteText)
	content.textContent = voteText
})

class People{
	constructor(userName, age, birthday){
		this.userName = userName
		this.age = age
		this.birthday = birthday
	}
	
}

People.prototype.getDetails = function () {
		return {userName : this.userName, age : this.age , birthDay: this.birthday}
}
People.prototype.isEligibleForVote = function () {
	return this.age >= 18;
}