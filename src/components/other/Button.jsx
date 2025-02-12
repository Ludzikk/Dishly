export default function Button({ children, type }) {
	const typeOfBtn =
		type === "primary"
			? "bg-primaryLight text-mainBgLight dark:bg-primaryDark dark:text-mainBgDark"
			: "bg-secondaryLight text-textColorLight dark:bg-secondaryDark dark:text-textColorDark";

	return (
		<button
			className={`py-2 px-6 rounded-md uppercase font-bold cursor-pointer lg:text-lg 2xl:text-xl duration-300 ${typeOfBtn}`}>
			{children}
		</button>
	);
}
