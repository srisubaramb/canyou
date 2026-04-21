function Display(props) {
	return(
		<>
			<ul style={{'list-style':'none'}}>
				{props.data.map((element,index) => {
					let labelText = '';
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
					return <li style={{border:'1px solid black' , maxWidth: '200px', paddingLeft: '50px'}}>
					<p className="task-label">{ `${index + 1 }. ${labelText}`}</p>
					<h4 className="card-heading">{element.taskHeading}</h4>
					<p className="card-description">{element.taskDescription}</p>
					</li>}) 
				}
			</ul>
		</>
	)
}
export default Display;