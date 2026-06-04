import fs from 'fs'
import http from 'http'
fs.writeFile('./hello.txt' , 'Hello' , () => {
	
})
fs.readFile('./hello.txt', 'utf-8', (err, content) =>{
	console.log(content)
})
fs.appendFile('./hello.txt', ' How are you' , () => {

})
const server = http.createServer((req, res) => {
	res.write('Server is active')
	res.end()
})
server.listen(3000)