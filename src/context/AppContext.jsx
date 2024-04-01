/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
	const [contentCategories, setContentCategories] = useState([]);
	const [currentUser, setContentUser] = useState();
	const [currentWeather, setCurrentWeather] = useState();

	return (
		<AppContext.Provider
			value={{
				contentCategories,
				setContentCategories,
				currentUser,
				setContentUser,
				currentWeather,
				setCurrentWeather,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
