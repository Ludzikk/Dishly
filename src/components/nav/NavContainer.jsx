import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../App";

export default function NavContainer() {
	const changeTheme = useContext(ThemeContext);

	return (
		<div className="p-2 py-4 relative flex justify-between items-center">
			<p className="font-bold text-center text-lg lg:text-xl 2xl:text-2xl">
				Dishly
			</p>
			<ul className="flex items-center justify-center gap-8 font-bold">
				<li>
					<a href="#" className="hover:opacity-70 duration-300">
						About
					</a>
				</li>
				<li>
					<a href="#" className="hover:opacity-70 duration-300">
						Recipes
					</a>
				</li>
			</ul>
			<button onClick={changeTheme} aria-label="Change dark/light theme of website">
				<FaMoon className="cursor-pointer hover:opacity-70 duration-300" />
			</button>
		</div>
	);
}
