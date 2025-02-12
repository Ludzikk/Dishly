export default function RecipesLetter({ children, ...rest }) {
	return <button {...rest} className="uppercase text-xl cursor-pointer">{children}</button>;
}
