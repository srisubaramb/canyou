import { useEffect } from "react";

function UseEffect() {
	useEffect(()=> {
		async function kilo()  {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		const data = await response.json()
		console.log(data)
		} 
		kilo()
	} , [])
}
export default UseEffect;