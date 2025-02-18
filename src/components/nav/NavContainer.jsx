import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { GlobalContext } from "../../App";

import { Link } from "react-router-dom";

export default function NavContainer() {
	const { changeTheme } = useContext(GlobalContext);

	return (
		<div className="p-2 py-4 relative flex justify-between items-center">
			<Link
				to="."
				className="font-bold text-center text-lg lg:text-xl 2xl:text-2xl">
				Dishly
			</Link>
			<ul className="flex items-center justify-center gap-8 font-bold">
				<li>
					<Link href="." className="hover:opacity-70 duration-300">
						About
					</Link>
				</li>
				<li>
					<Link href="." className="hover:opacity-70 duration-300">
						Recipes
					</Link>
				</li>
			</ul>
			<button
				onClick={changeTheme}
				aria-label="Change dark/light theme of website">
				<FaMoon className="cursor-pointer hover:opacity-70 duration-300" />
			</button>
		</div>
	);
}
