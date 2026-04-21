let data = [];
const currentUser = JSON.parse(sessionStorage.getItem('user'))
if(!currentUser) {
	if(confirm('Login to use')) {
		location.href = 'login.html'
	} else {
		location.href = 'signup.html'
	}
}
const storeString = `kanbon_${currentUser.email}`
const toDoBorad = document.querySelector('#to-do .cards-container')
const inProgress = document.querySelector('#in-progress .cards-container')
const completed = document.querySelector('#completed .cards-container')
const addCardBtn = document.querySelectorAll('.add-card-btn')
const addCardForm = document.querySelector('#add-card-form')
const overlay = document.querySelector('#overlay')
const columns = document.querySelectorAll('.columns')

addCardForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const heading = document.querySelector('#task-heading').value
	const description = document.querySelector('#task-description').value
	const taskStatus = document.querySelector('#task-status').value
	data.push(createAndAddTask(heading,description,taskStatus))
	renderTaskInBoard(data)
	storeData()
	e.target.reset()
	toggleFormPopup()
})
const createAndAddTask = (taskHeading,taskDescription,taskStatus = 'to-do') => {
	return {id:new Date(),taskHeading, taskDescription,taskStatus}
}

const renderTaskInBoard = (data) => {
	clearBoards()
	data.forEach(element => {
		// const taskHTML = `<fieldset draggable="true" data-id=${element.id}>
		// <legend class="card-heading">${element.taskHeading}</legend>
		// <p class="card-description">${element.taskDescription}</p>
		// </fieldset>`
		const  cardDiv = document.createElement('div')
		cardDiv.setAttribute('draggable','true')
		cardDiv.setAttribute('data-id',element.id)
		cardDiv.classList.add('card')
		let labelText;
		switch(element.taskStatus) {
			case "to-do" :
				labelText = "Not Started"
				break;
			case "in-progress":
				labelText = "In Research"
				break;
			case "completed":
				labelText = "Done"
				break;
		}	
		cardDiv.innerHTML = `	<p class="task-label">${labelText}</p>
								<h4 class="card-heading">${element.taskHeading}</h4>
								<p class="card-description">${element.taskDescription}</p>`
		cardDiv.addEventListener('dragstart',(e) => {
			e.dataTransfer.setData('text/plain',element.id)
		})
		switch(element.taskStatus) {
			case "to-do" :
				toDoBorad.appendChild(cardDiv);
				break;
			case "in-progress":
				inProgress.appendChild(cardDiv);
				break;
			case "completed":
				completed.appendChild(cardDiv);
				break;
		}	
	});
}
columns.forEach(column => {
	column.addEventListener('dragover',(e) => {
		e.preventDefault()
	} )
	column.addEventListener('drop' , (e) => {
		const id = e.dataTransfer.getData('text/plain')
		const [task] = data.filter(card => card.id === id)
		task.taskStatus = e.currentTarget.id
		updateData(task)
		storeData()
		renderTaskInBoard(data)
	})
})
document.querySelector('.btn-delete').addEventListener('click', (e) => {
	if(confirm("All data will be Cleared")) {
		data = []
		storeData()
		renderTaskInBoard(data)
	}
})
const clearBoards = () => {
	toDoBorad.innerHTML = ''
	inProgress.innerHTML = ''
	completed.innerHTML = ''
}

addCardBtn.forEach(button => button.addEventListener('click',(e) => {
	document.querySelector('#task-status').value = button.closest('.columns').id
	toggleFormPopup()
}))
overlay.addEventListener('click', (e) => {
	toggleFormPopup()
})
document.querySelector('.close-icon').addEventListener('click', (e) => {
	toggleFormPopup()
})
function toggleFormPopup() {
	overlay.classList.toggle('display-overlay')
	addCardForm.classList.toggle('add-card-show')
}
function storeData(){
	localStorage.setItem(storeString, JSON.stringify(data))
}
function updateData(task) {
	data = data.map(card =>{
		return card.id == task.id ? task : card
	})
}
					
(function loadData() {
	data =  JSON.parse(localStorage.getItem(`${storeString}`)) || []
	if(data.length != 0) {
		renderTaskInBoard(data)
	}
})()
