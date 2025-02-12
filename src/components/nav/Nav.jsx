export default function Nav({ children }) {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b bg-mainBgLight text-textColorLight border-textColorLight/20 dark:bg-mainBgDark dark:text-textColorDark dark:border-textColorDark/20">
			<div className="max-w-[1200px] w-full mx-auto">{children}</div>
		</nav>
	);
}
