import { useEffect, useState } from "react";
import Main from "../main/Main";
import MainSection from "../main/MainSection";

import { useParams } from "react-router-dom";

export default function RecipePage() {
	const [currentRecipe, setCurrentRecipe] = useState({});

	const { id } = useParams();

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((res) => res.json())
			.then((data) => setCurrentRecipe(data.meals[0]));
	}, [id]);

	const ingredients = Object.keys(currentRecipe)
		.filter((key) => key.startsWith("strIngredient"))
		.map((key, index) => {
			const ingredient = currentRecipe[key]?.trim();
			const measure = currentRecipe[`strMeasure${index + 1}`]?.trim();

			return ingredient && ingredient !== ""
				? { name: ingredient, measure: measure || "unknown" }
				: null;
		})
		.filter(Boolean);

	return (
		<Main>
			<MainSection className="pt-24">
				{Object.keys(currentRecipe).length > 0 ? (
					<div className="flex flex-col gap-8 items-center">
						<h1 className="font-bold text-2xl">{currentRecipe.strMeal}</h1>
						<div className="flex flex-col items-center gap-4 lg:gap-20 lg:flex-row">
							<div>
								<img
									className="max-w-[400px] w-full"
									src={currentRecipe.strMealThumb}
									alt={currentRecipe.strMeal}
								/>
							</div>
							<ul className="flex flex-col gap-2">
								{ingredients.map((item) => {
									return (
										<li key={item}>
											<p className="flex w-[200px] justify-between">
												<span>{item.measure}</span>
												<span>{item.name}</span>
											</p>
										</li>
									);
								})}
							</ul>
						</div>
						<iframe
							className="lg:max-w-1/2 w-full h-[250px]"
							src={`https://www.youtube.com/embed/${currentRecipe.strYoutube.slice(
								-11
							)}?si=uFkkpDdepwDzxaoo`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowfullscreen></iframe>
					</div>
				) : null}
			</MainSection>
		</Main>
	);
}
