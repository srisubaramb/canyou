import { useState } from "react";
import Display from "./Display";
import Form from "./Form";
import { useEffect } from "react";
function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		setData(JSON.parse(localStorage.getItem('todo')) || [])
	} , [])
	return (
		<>
			<h1>Todo</h1>
			<Form  data={data} setData={setData}/>
			<Display data={data}/>
		</>
	)
}

export default App;