function usingFetchWiththen(url) {
return fetch(url)
.then(response => response.json())
.then(data => data)
.catch(error => console.log(error))
}
async function fetchData(url) {
	let data = await fetch(url)
	data = await data.json();
	return data
}
const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1')
setTimeout(() => console.log('delay'),1000)
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/2')
const promise3 = fetch('https://jsonplaceholder.typicode.com/users/3')

Promise.all([promise1,promise2,promise3])
.then(response => response.forEach(response => response.json().then(data => console.log(data))))
