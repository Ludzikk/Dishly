import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Button from "../other/Button";
import CarouselImg from "./CarouselImg";

import header1lg from "/header1-lg.jpg";
import header1sm from "/header1-sm.jpg";
import header2lg from "/header2-lg.jpg";
import header2sm from "/header2-sm.jpg";
import header3lg from "/header3-lg.jpg";
import header3sm from "/header3-sm.jpg";

export default function HeaderCarousel() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [screenHeight, setScreenHeight] = useState(window.innerHeight);

	const headerImages = {
		lg: [header1lg, header2lg, header3lg],
		sm: [header1sm, header2sm, header3sm],
	};

	const heightOfPictures =
		screenHeight > 1080 ? "max-h-[1080px] h-full" : "h-screen";

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
			setScreenHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className="max-h-screen relative bg-mainBgLight dark:bg-mainBgDark">
			<div className="absolute top-[200px] left-1/2 translate-x-[-50%] z-10 text-textColorDark text-center px-2">
				<h1 className="text-6xl font-header tracking-wide md:text-7xl 2xl:text-8xl">
					Welcome to Dishly
				</h1>
				<p className="py-6 md:text-lg 2xl:text-xl">
					Check out our recipes and start cooking up something amazing today!
				</p>
				<Button>Check</Button>
			</div>
			<Carousel
				showStatus={false}
				showThumbs={false}
				showArrows={false}
				infiniteLoop={true}
				autoPlay={true}
				interval={5000}
				transitionTime={1000}>
				{screenWidth > 768
					? headerImages.lg.map((img) => {
							return (
								<CarouselImg
									key={img}
									src={img}
									className={`${heightOfPictures} max-w-[1920px] object-cover`}
								/>
							);
					  })
					: headerImages.sm.map((img) => {
							return (
								<CarouselImg
									key={img}
									src={img}
									className={`${heightOfPictures} max-w-[1920px] object-cover`}
								/>
							);
					  })}
			</Carousel>
		</header>
	);
}
