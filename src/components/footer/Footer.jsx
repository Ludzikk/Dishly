export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="p-2 py-4 bg-secondaryDark text-textColorDark dark:bg-secondaryLight dark:text-textColorLight">
			<div className="max-w-[1200px] w-full mx-auto flex items-center justify-center gap-8">
				<span>© Copyright {currentYear} Dishly</span>
				<ul className="font-bold flex gap-8">
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Recipes</a>
					</li>
				</ul>
				<span>Api used: </span>
			</div>
		</footer>
	);
}
