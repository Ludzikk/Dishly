export default function AboutUs() {
	return (
		<div className="flex items-center">
			<div className="lg:w-1/2">
				<h2 className="text-3xl text-center font-bold pb-4 lg:text-left">
					About us
				</h2>
				<p className="tracking-wide leading-7">
					Welcome to Dishly, your ultimate destination for culinary inspiration
					and delicious recipes! Whether you're a seasoned chef or a beginner in
					the kitchen, we’re here to make cooking fun, easy, and accessible for
					everyone.
				</p>
			</div>
			<div className="hidden w-1/2 h-[400px] lg:block aboutusbg"></div>
		</div>
	);
}
