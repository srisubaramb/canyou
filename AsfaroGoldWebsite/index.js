const users = [
  { email: "john@example.com", password: "hashed123", name: "John" },
  { email: "jane@example.com", password: "hashed456", name: "Jane" }
];

function checkAccess(userEmail,UserPassword){
	if(userEmail.length == 0) {
		console.log("Email empty")
		return;
	}
	if (UserPassword.length == 0) {
		console.log("Password Empty")
		return;
	}
	if (users.find(p=>p.email===userEmail)) {
		if(users.find(p=>p.password===UserPassword)) {
			console.log("Logged in")
 		} else {
			console.log("Password invaild")
		}
	} else {
		console.log("Email invaild")
	}
}
console.log(checkAccess('john@example.com',''))