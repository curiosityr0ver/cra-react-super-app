import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/auth/Registration";
import "./App.css";
function App() {
	const AppState = useContext(AppContext);
	console.log(AppState);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
