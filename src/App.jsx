// import { useContext } from "react";
// import { AppContext } from "./context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/auth/Registration";
import "./App.css";
import GenrePage from "./pages/genres/GenrePage";
function App() {
	// const AppState = useContext(AppContext);
	// console.log(AppState);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Registration />} />
				<Route path="/genre" element={<GenrePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
