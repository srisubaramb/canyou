function Form(props){
	function handleFormSubmission(e){
		e.preventDefault()
		const taskHeading = document.querySelector("input[type='text']").value
		const taskDescription = document.querySelector('#task-description').value
		const taskStatus = document.querySelector("select").value
		props.setData(data => {
			const updated = [...data,{taskHeading, taskDescription, taskStatus}]
			localStorage.setItem('todo',JSON.stringify(updated))
			console.log(localStorage.getItem('todo'))
			return updated
	})
	e.target.reset()
}
	return(
		<form onSubmit={(e) => handleFormSubmission(e)}>
			<input type="text"  placeholder="Enter the task Heading" required/>
			<input type="text"  placeholder="Enter the task Description" id="task-description"/>
			<select name="task-status" id="" required>
				<option value="to-do" selected>To Do</option>
				<option value="in-progress" >In Progress</option>
				<option value="completed">Completed</option>
			</select>
			<input type="submit" value="Add Task" />
		</form>
	)
}
export default Form;