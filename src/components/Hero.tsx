import { HeroCards } from "./HeroCards";
import SocialLinks from "./SocialLinks";

export const Hero = () => {
	return (
		<section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
			<div className="text-center lg:text-start space-y-6">
				<main className="text-5xl md:text-6xl font-bold">
					<h1>
						Hi, I'm{" "}
						<span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
							Ajaz
						</span>
						.
					</h1>
					<h2 className="inline">
						A{" "}
						<span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
							Software Engineer
						</span>
						.
					</h2>
				</main>

				<p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
					I love building pixel-perfect, engaging, and accessible products for the web.
				</p>

				<SocialLinks className="justify-center lg:justify-start" />
			</div>

			{/* Hero cards sections */}
			<div className="z-10">
				<HeroCards />
			</div>

			{/* Shadow effect */}
			<div className="shadow"></div>
		</section>
	);
};
