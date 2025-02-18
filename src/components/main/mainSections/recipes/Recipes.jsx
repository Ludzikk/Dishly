import RecipeItem from "./RecipeItem";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../../App";

export default function Recipes() {
	const [recipesFiltered, setRecipesFiltered] = useState([]);

	const { recipes, page, itemsOnPage } = useContext(GlobalContext);

	useEffect(() => {
		const filteredData = recipes.meals
			? recipes.meals
					.map((meal) => {
						return (
							<RecipeItem
								key={meal.idMeal}
								src={meal.strMealThumb}
								alt={meal.strMeal}
								id={meal.idMeal}>
								{meal.strMeal}
							</RecipeItem>
						);
					})
					.filter((item, index) => {
						return (
							(index >= page * itemsOnPage) & (index < (page + 1) * itemsOnPage)
						);
					})
			: null;

		setRecipesFiltered(filteredData);
	}, [page, recipes]);

	return (
		<div>
			<h2 className="font-bold text-3xl text-center">Our recipes</h2>
			<ul className="py-8 min-h-[656px] grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{recipes.meals ? (
					recipesFiltered
				) : (
					<div className="min-h-[656px] flex justify-center items-center text-lg [grid-column:1/span_4] [grid-rows:1/span_2]">
						<span>No recipes change letter</span>
					</div>
				)}
			</ul>
		</div>
	);
}
