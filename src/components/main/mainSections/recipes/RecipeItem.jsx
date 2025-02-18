import { Link } from "react-router-dom";

export default function RecipeItem({ children, src, alt, id, ...rest }) {
	return (
		<li className="relative group overflow-hidden max-h-[288px]">
			<Link to={`recipe/${id}`} {...rest}>
				<img
					src={src}
					alt={alt}
					className="group-hover:scale-[1.1] duration-500"
				/>
				<p className="absolute bottom-0 left-0 w-full p-2 text-center bg-primaryLight/80 text-mainBgLight dark:bg-primaryDark/80 dark:text-mainBgDark">
					{children}
				</p>
			</Link>
		</li>
	);
}
