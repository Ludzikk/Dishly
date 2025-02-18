import { useContext } from "react";

import HeaderCarousel from "../header/HeaderCarousel";
import Main from "../main/Main";
import MainSection from "../main/MainSection";
import AboutUs from "../main/mainSections/aboutsUs/AboutUs";
import Recipes from "../main/mainSections/recipes/Recipes";
import ReactPaginate from "react-paginate";
import RecipesLetters from "../main/mainSections/recipes/RecipesLetters";

import { GlobalContext } from "../../App";

export default function HomePage() {
	const { recipes, itemsOnPage, setPage } = useContext(GlobalContext);

	return (
		<>
			<HeaderCarousel />
			<Main>
				<MainSection>
					<AboutUs />
				</MainSection>
				<MainSection>
					<Recipes />
					{recipes.meals ? (
						<ReactPaginate
							breakLabel="..."
							pageRangeDisplayed={5}
							pageCount={Math.ceil(recipes.meals.length / itemsOnPage)}
							renderOnZeroPageCount={null}
							containerClassName={"pagination"}
							pageClassName={"page-item"}
							activeClassName={"active-pagination"}
							nextLabel={<p className="button-pagination">Next</p>}
							previousLabel={<p className="button-pagination">Prev</p>}
							onPageChange={(event) => setPage(event.selected)}
							previousClassName={"previous-pagination"}
							nextClassName={"next-pagination"}
						/>
					) : null}
					<RecipesLetters />
				</MainSection>
			</Main>
		</>
	);
}
