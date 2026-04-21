document.getElementById('postform').addEventListener('submit', async function (e) {
			e.preventDefault()
			const username = document.querySelector('#username').value;
			const password = document.querySelector('#password').value;
			const responeServer = await fetch('http://localhost:3000/posts', {
				method : "POST",
				headers : {"content-type":"application/json"},
				body : JSON.stringify({username,password})
			})
			const responeServerData = await responeServer.json()
			console.log("response server data " , responeServerData)
			alert('Your Data is in our hand 👻')
			e.target.reset()
		})
		async function deleteUser() {
			const username = document.querySelector('#username').value;
			const password = document.querySelector('#password').value;
			const searchString = `http://localhost:3000/posts?username=${username}`
			console.log(searchString)
			const responeServer = await fetch(searchString)
			const responeServerData = await responeServer.json()
			console.log("user found ", responeServerData)
			if (responeServerData.length === 0) {
				alert("User not found!");
				return;
			}
			//since delete requires a specific id
			const deleteUser = await fetch(`http://localhost:3000/posts/${responeServerData[0].id}`,{
				method:'DELETE'
			})
			const responeServer1 = await fetch(searchString)
			const responeServerData1 = await responeServer.json()
			console.log("user found after deletion", responeServerData1)
			alert("User deleted successfully!");
		}
		async function updateUser() {
				const username = document.querySelector('#username').value;
				const password = document.querySelector('#password').value;
				// Find user by username
				// const searchString = `http://localhost:3000/posts?username=${username}`;
				// const responeServer = await fetch(searchString);
				// const responeServerData = await responeServer.json();
				const api = axios.create({
					'baseURL' : 'http://localhost:3000',
					'headers' : {'content-type':'application/json'}
				})
				const {data : users} = await api.get('/posts',{
					params: {username}
				})
				if (users.length === 0) {
					alert("User not found!");
					return;
				}
				const userId = users[0].id;
				// Update user
				// const updateResponse = await fetch(`http://localhost:3000/posts/${userId}`, {
				// 	method: "PUT", 
				// 	headers: { "content-type": "application/json" },
				// 	body: JSON.stringify({ username, password })
				// });
				// const updatedUser = await updateResponse.json();
				const {data : updatedUser} = await api.put(`/posts/${userId}`,
				 {username, password}
				)
				console.log("Updated user:", updatedUser);
				alert("User updated successfully!");
			}