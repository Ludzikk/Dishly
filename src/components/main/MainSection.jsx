export default function MainSection({ children, className }) {
	return (
		<section className={`py-6 px-2 bg-mainBgLight text-textColorLight dark:bg-mainBgDark dark:text-textColorDark ${className}`}>
			<div className="max-w-[1200px] w-full mx-auto">{children}</div>
		</section>
	);
}
