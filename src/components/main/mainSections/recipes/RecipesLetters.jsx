import { GlobalContext } from "../../../../App";
import { useContext } from "react";
import RecipesLetter from "./RecipesLetter";

export default function RecipesLetters() {
	const { changeLetter } = useContext(GlobalContext);

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

	function setLetter(event) {
		const letterID = event.currentTarget.id;
		changeLetter(letterID);
	}

	return (
		<div className="flex gap-4 justify-center flex-wrap text-accentLight dark:text-accentDark">
			{letters.map((letter) => {
				return (
					<RecipesLetter key={letter} id={letter} onClick={setLetter}>
						{letter}
					</RecipesLetter>
				);
			})}
		</div>
	);
}
