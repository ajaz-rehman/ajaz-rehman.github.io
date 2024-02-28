import heroImage from "@/assets/images/hero.png";

export function HeroCards() {
	return (
		<div className="hidden lg:block">
			<img src={heroImage} alt="Hero" className="w-full" />
		</div>
	);
}
