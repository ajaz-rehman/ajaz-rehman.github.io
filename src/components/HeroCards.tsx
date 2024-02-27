import heroImage from "@/assets/images/hero.png";

export function HeroCards() {
	return (
		<div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
			<img src={heroImage} alt="Hero" className="absolute top-0 right-0 h-full" />
		</div>
	);
}
