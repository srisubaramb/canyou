function debounce (fn, delay) {
	let timer;
	return function(...query) {
		if (timer !== undefined) {
			clearTimeout(timer)
		} 
		timer = setTimeout(() => fn(query) , delay)
	}
	
}
function callAPI(query) {
	apicalled++;
	
}
const debounce1 = debounce(callAPI, 1000)
const keyinput = document.querySelector('#key-count-input')
let count = 0;
let apicalled = 0;
keyinput.addEventListener('keyup' , () => {
	count++;
	debounce1(keyinput.value)
	console.log("key pressed " , count, "api called " , apicalled)
})

