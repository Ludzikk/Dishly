export default function CarouselImg({ alt, src, className }) {
	return (
		<div>
			<div>
				<div className={`relative ${className} mx-auto`}>
					<img src={src} alt={alt} className={className}/>
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-black/40 to-40%"></div>
				</div>
			</div>
		</div>
	);
}
