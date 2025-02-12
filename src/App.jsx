import { useEffect, useState, createContext } from "react";
import HeaderCarousel from "./components/header/HeaderCarousel";
import Nav from "./components/nav/Nav";
import NavContainer from "./components/nav/NavContainer";
import Main from "./components/main/Main";
import MainSection from "./components/main/MainSection";
import AboutUs from "./components/main/mainSections/aboutsUs/AboutUs";
import Footer from "./components/footer/Footer";
import Recipes from "./components/main/mainSections/recipes/Recipes";

const ThemeContext = createContext();
const RecipesContext = createContext();

export default function App() {
	const [recipes, setRecipes] = useState([]);
	const [letter, setLetter] = useState("a");
	const [theme, setTheme] = useState("dark");

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
	}, [letter]);

	useEffect(() => {
		document.body.classList.remove("light", "dark");
		document.body.classList.add(theme);
	}, [theme]);

	return (
		<>
			<ThemeContext.Provider value={changeTheme}>
				<Nav>
					<NavContainer />
				</Nav>
			</ThemeContext.Provider>
			<HeaderCarousel />
			<Main>
				<MainSection>
					<AboutUs />
				</MainSection>
				<MainSection>
					<RecipesContext.Provider value={{ recipes, changeLetter }}>
						<Recipes />
					</RecipesContext.Provider>
				</MainSection>
			</Main>
			<Footer />
		</>
	);
}

export { ThemeContext, RecipesContext };
