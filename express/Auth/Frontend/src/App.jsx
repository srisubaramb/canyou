import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
	return (
		<>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/signup" element={<Signup />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Routes>
		</BrowserRouter>
		</>
	)
}
export default App;