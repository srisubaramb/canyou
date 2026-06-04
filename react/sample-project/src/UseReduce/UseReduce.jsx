import { createElement, useReducer } from "react"

const initialState = {
	tasks : []
}
let edit = false
function reducer(state, action) {
	let updatedState;
	switch(action.type) {
		case 'todo'  : 
			if ( edit ) {
				updatedState = state.tasks.map(task => 	{
					if(task.id === action.type)
				})
			} else {
				updatedState =  {tasks : [...state.tasks, {...action.payload , id : Date.now()} ]} 
			}
			break;
		case 'inprogress' :
			updatedState =  {tasks : [...state.tasks, action.payload]}
			break;
		case 'completed' : 
			updatedState =  {tasks : [...state.tasks, action.payload]}
			break;
		case 'edit' :
			loadIntoForm(state.tasks.find(task => task.id === action.id))
			edit = true
			updatedState = {...state}
	}
	localStorage.setItem('tasks' , JSON.stringify(updatedState))
	return updatedState;
}
function loadIntoForm(obj){
	const taskStatus = document.querySelector('#task-status')
	const title = document.querySelector('.todo-title')
	title.value = obj.title
	taskStatus.value = obj.taskStatus
}
function UseReduce(){
	const [state, dispatch ] = useReducer(reducer, JSON.parse(localStorage.getItem('tasks')) || initialState)
	function handleSubmit(e) {
		e.preventDefault();
		const taskStatus = document.querySelector('#task-status').value
		const title = document.querySelector('.todo-title').value
		
		e.target.reset();
	}
	return (
		<>
			<form action="" onSubmit={(e) => {handleSubmit(e)}}>
				<input type="text"  placeholder="task Heading" className="todo-title"required/>
				<select name="task-status" id="task-status" defaultValue='todo'>
					<option value="todo" >ToDo</option>
					<option value="inprogress" >In Progress</option>
					<option value="completed">Completed</option>
				</select>
				<input type="submit" value="Add task" />
			</form>
			<ul>
				{state.tasks.map(task =>
					 <li key={task.id} id={task.id}> 
						{task.title +" " +  task.taskStatus}
						<button onClick={() => dispatch({type: 'edit' , id : task.id})}>Edit</button>
					</li>
					)
				}
			</ul>
		</>
	)
}
export default UseReduce;