import Nav from "./nav/Nav";
import NavContainer from "./nav/NavContainer";
import Footer from "./footer/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<Nav>
				<NavContainer />
			</Nav>
			<Outlet/>
			<Footer />
		</>
	);
}
