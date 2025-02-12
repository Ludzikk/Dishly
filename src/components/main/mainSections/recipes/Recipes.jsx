import RecipesLetter from "./RecipesLetter";
import RecipeItem from "./RecipeItem";
import { useContext } from "react";
import { RecipesContext } from "../../../../App";

export default function Recipes() {
	const recipesData = useContext(RecipesContext);

	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	function changeLetter(event) {
		const letterID = event.currentTarget.id;
		recipesData.changeLetter(letterID);
	}

	console.log(recipesData.recipes);
	return (
		<div>
			<h2 className="font-bold text-3xl text-center">Our recipes</h2>
			<ul className="py-8 grid grid-cols-4 gap-4">
				{recipesData.recipes.meals ? (
					recipesData.recipes.meals.map((meal) => {
						return (
							<RecipeItem
								key={meal.idMeal}
								src={meal.strMealThumb}
								alt={meal.strMeal}>
								{meal.strMeal}
							</RecipeItem>
						);
					})
				) : (
					<p className="text-center">No recipes</p>
				)}
			</ul>
			<div className="flex gap-4 justify-center flex-wrap text-accentLight dark:text-accentDark">
				{letters.map((letter) => {
					return (
						<RecipesLetter key={letter} id={letter} onClick={changeLetter}>
							{letter}
						</RecipesLetter>
					);
				})}
			</div>
		</div>
	);
}
