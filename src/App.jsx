import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import RecipePage from "./components/pages/RecipePage";

const GlobalContext = createContext();

export default function App() {
	const [theme, setTheme] = useState("dark");
	const [recipes, setRecipes] = useState({ meals: [] });
	const [letter, setLetter] = useState("a");
	const [page, setPage] = useState(0);

	const itemsOnPage = 8;

	function changeTheme() {
		setTheme((prevVal) => (prevVal === "dark" ? "light" : "dark"));
		document.body.classList.add(theme);
	}

	function changeLetter(letter) {
		setLetter(letter);
	}

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
			.then((req) => req.json())
			.then((data) => setRecipes(data))
			.catch((error) => console.log("Error fetching recipes data: ", error));

		setPage(0);
	}, [letter]);

	useEffect(() => {
		document.body.classList.remove("light", "dark");
		document.body.classList.add(theme);
	}, [theme]);

	return (
		<GlobalContext.Provider
			value={{
				changeTheme,
				changeLetter,
				recipes,
				itemsOnPage,
				page,
				setPage,
			}}>
			<BrowserRouter>
				<Routes>
					<Route path="/dishly" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="recipe/:id" element={<RecipePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</GlobalContext.Provider>
	);
}

export { GlobalContext };
