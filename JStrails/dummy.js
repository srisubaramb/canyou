let examTimer = 10;
const intervalId = setInterval(() => {
	examTimer--;
	if(examTimer>0) console.log("Hi");
	else {
		clearInterval(intervalId);
		console.log("Finished")
	}
},100)