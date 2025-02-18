export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="p-2 py-4 bg-secondaryDark text-textColorDark dark:bg-secondaryLight dark:text-textColorLight">
			<div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<span>© Copyright {currentYear} Dishly</span>
				<ul className="font-bold flex flex-col lg:flex-row gap-2 lg:gap-4 text-center">
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Recipes</a>
					</li>
				</ul>
				<span>Api used: <a href="https://www.themealdb.com/api.php" className="underline">TheMealDB</a></span>
			</div>
		</footer>
	);
}
