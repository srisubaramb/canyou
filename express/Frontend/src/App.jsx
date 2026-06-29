import Form from "./Components/Form";
import UserList from "./Components/UserList";
import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./Components/Nav";
function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<UserList />} />
					<Route path="/add-user" element={<Form/>} />
					<Route path="/edit-user/:id" element={<Form /> } /> 
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App;