export default function RecipeItem({ children, src, alt }) {
	return (
		<li className="relative group overflow-hidden">
			<a href="#">
				<img src={src} alt={alt} className="group-hover:scale-[1.1] duration-500" />
				<p className="absolute bottom-0 left-0 w-full py-2 text-center bg-black/70">
					{children}
				</p>
			</a>
		</li>
	);
}
