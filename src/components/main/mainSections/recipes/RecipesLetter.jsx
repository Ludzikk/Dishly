export default function RecipesLetter({ children, ...rest }) {
	return <button {...rest} className="uppercase text-xl cursor-pointer hover:opacity-80 duration-300">{children}</button>;
}
